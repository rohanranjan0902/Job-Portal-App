import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionOptions = {
            serverSelectionTimeoutMS: 10000,
        };
        
        await mongoose.connect(process.env.MONGO_URI, connectionOptions);
        console.log('🚀 MongoDB connected successfully');
        console.log(`📍 Database: ${mongoose.connection.name}`);
        
        // Handle connection events
        mongoose.connection.on('error', (err) => {
            console.log('🔥 MongoDB connection error:', err.message);
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('📡 MongoDB disconnected');
        });
        
    } catch (error) {
        console.error('❌ MongoDB connection failed:');
        console.error('Error message:', error.message);
        
        if (error.message.includes('IP')) {
            console.error('\n🔧 SOLUTION: Add your IP address to MongoDB Atlas whitelist:');
            console.error('1. Go to https://cloud.mongodb.com');
            console.error('2. Navigate to Network Access → Add IP Address');
            console.error('3. Add current IP or use 0.0.0.0/0 for all IPs (development only)');
        }
        
        console.error('\n⚡ Server will continue running without database connection.');
        console.error('⚡ Fix the MongoDB connection and restart the server.');
    }
};

export default connectDB;
