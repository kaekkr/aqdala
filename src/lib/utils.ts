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
		
		const db = await mongoose.connect(process.env.MONGO as string, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		} as ConnectOptions)
		
		connection.isConnected = db.connections[0].readyState
	} catch (error) {
		console.log(error)
		throw new Error(error as string)
	}
}
