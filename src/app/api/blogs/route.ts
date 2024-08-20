import { Blog } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	// const testData = [
	// 	{
	// 		_id: { $oid: '1' },
	// 		description:
	// 			'http://ptica.kz/news/krupnaja-pticefabrika-zarabotala-v-akmolinskoj-oblasti',
	// 		img: '/blogs/blog-1.jpg',
	// 		slug: '1',
	// 		'title-en': 'A large poultry farm is operational in Akmola region',
	// 		'title-ru': 'Крупная птицефабрика заработала в Акмолинской области',
	// 	},
	// ]
	try {
		await connectToDb()

		const blogs = await Blog.find()
		// const blogs = testData
		return NextResponse.json(blogs)
	} catch (error) {
		console.log(error)
		throw new Error('Failed to fetch blogs')
	}
}
