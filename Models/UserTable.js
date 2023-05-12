import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            required: true,
            enum: [
                'admin',
                'airline',
                'manufacturer',
                'recycle'
            ],
        }
    }
)

export default mongoose.model('User', userSchema)
