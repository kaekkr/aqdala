import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		img: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

const blogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		img: {
			type: String,
			required: true
		},
		slug: {
			type: String,
			required: true,
			unique: true
		}
	},
	{ timestamps: true }
)

export const Product = mongoose.models?.Product || mongoose.model('Product', productSchema)
export const Blog = mongoose.models?.Blog || mongoose.model('Blog', blogSchema)