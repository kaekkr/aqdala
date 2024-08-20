import { Product } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	// const testData = [
	// 	{
	// 		_id: { $oid: '1' },
	// 		description:
	// 			'We are committed to producing safe, high-quality food for our customers and consumers at Tyson Foods. Our robust food safety culture is based on science, innovation and continuous improvement.',
	// 		img: '/products/chicken-1.jpg',
	// 		'name-en': 'Fillet',
	// 		'name-ru': 'Филе',
	// 	},
	// ]
	try {
		await connectToDb()

		const products = await Product.find()
		// const products = testData
		return NextResponse.json(products)
	} catch (error) {
		console.log(error)
		throw new Error('Failed to fetch products')
	}
}
