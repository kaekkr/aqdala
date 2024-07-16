import { Blog } from '@/lib/models'
import { connectToDb } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	try {
		await connectToDb()
		
		const blogs = await Blog.find()
		return NextResponse.json(blogs)
	} catch (error) {
		console.log(error)
		throw new Error('Failed to fetch blogs')
	}
}