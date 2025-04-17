import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://dbtask:dbtask7777@dbgoogle-docs-clone.zluwmjy.mongodb.net/dbgoogle-docs-clone?retryWrites=true&w=majority&appName=dbgoogle-docs-clone`;

    try {
        await mongoose.connect(URL);
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.log('❌ Error while connecting with the database:', error);
    }
}

export default Connection;
