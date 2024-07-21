import {Blog} from '@/lib/models'
import {connectToDb} from '@/lib/utils'
import {NextResponse} from 'next/server'
import {NextRequest} from 'next/server'
import {useParams} from "next/navigation";

export const GET = async (request: NextRequest, {params}: { params: { slug: string } }) => {
    try {
        await connectToDb()

        const slug = params.slug

        if (!slug) {
            return NextResponse.json({message: 'Blog slug is required'}, {status: 400})
        }

        const blog = await Blog.findOne({slug})

        if (!blog) {
            return NextResponse.json({message: 'Blog not found'}, {status: 404})
        }

        return NextResponse.json(blog)
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Failed to fetch blog'}, {status: 500})
    }
}
