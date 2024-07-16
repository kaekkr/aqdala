import { Product } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	try {
		await connectToDb()
		
		const products = await Product.find()
		return NextResponse.json(products)
	} catch (error) {
		console.log(error)
		throw new Error('Failed to fetch products')
	}
}