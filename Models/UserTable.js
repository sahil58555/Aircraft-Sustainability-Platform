const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'mail is required.'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: [true, 'password is required.'],
    validate: {
      validator: function (password) {
        const minLength = 8;
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumericOrSpecialChar = /[0-9!@#$%^&*()]/.test(password);

        return (
          password.length >= minLength &&
          hasLowerCase &&
          hasUpperCase &&
          hasNumericOrSpecialChar
        );
      },
      message:
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one numeric or special character',
    },
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
});
module.exports = mongoose.model('User', userSchema);