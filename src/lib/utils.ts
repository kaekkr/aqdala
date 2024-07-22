import mongoose, { Connection, ConnectOptions } from 'mongoose'

interface ConnectionType {
	isConnected?: number;
}

const connection: ConnectionType = {}

export const connectToDb = async (): Promise<void> => {
	try {
		if (connection.isConnected) {
			console.log('Using existing connection')
			return
		}
		
		const db = await mongoose.connect(process.env.MONGO_URL as string)
		
		connection.isConnected = db.connections[0].readyState
	} catch (error) {
		console.log(error)
		throw new Error(error as string)
	}
}

export const splitTextByPercentage = (text: string, percentage: number) => {
	const splitIndex = Math.floor(text.length * percentage)
	const firstPart = text.slice(0, splitIndex)
	const secondPart = text.slice(splitIndex)
	return { firstPart, secondPart }
}
