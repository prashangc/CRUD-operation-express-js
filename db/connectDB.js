import mongoose from "mongoose"

const connectDB = async (DATABASE_URL) => {
    try {
        const DATABASE_OPTIONS = {
            user: 'admin',
            pass: 'admin123',
            dbName: 'schoool',
            authSource: 'schoool'
        }
        await mongoose.connect(DATABASE_URL, DATABASE_OPTIONS).then(() => {
            console.log('connected to database')
        })
    } catch (e) {
        console.log(`Error connecting to database: ${e}`)
    }
}

export default connectDB