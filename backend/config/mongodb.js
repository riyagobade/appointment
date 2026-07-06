import mongoose from 'mongoose';
import dns from 'node:dns/promises';
dns.setServers(["1.1.1.1"]);

const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log("Database Connected");
        });

        await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`);

    } catch (error) {
        console.log("MongoDB Error:", error.message);
    }
};

export default connectDB;