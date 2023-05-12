const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'mail is required.'],
            lowercase: true,
            trim: true,
            validate: {
                validator: function(v) {
                    return  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
                }
            }
        },
        password: {
            type: String,
            required: [true, 'password is required.']
        },
        userType: {
            type: String,
            required: [true, 'userType is required.'],
            enum: [
                'admin',
                'airline',
                'manufacturer',
                'recycle'
            ],
        }
    }
)
module.exports = mongoose.model('User', userSchema);
