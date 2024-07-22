import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.error(error);
    }
}

export default connect