const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Please enter a valid Email");
            }
        }
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            console.log('Entered password:', value);
            console.log('Password length:', value.length);
            console.log('Is password valid:', validator.isLength(value, { min: 6, max: 12 }));

            if (!validator.isLength(value, { min: 6, max: 70})) {
                throw new Error('Please enter a valid Password');
            }
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password is not valid, please change your password');
            }
        }
    }
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);


export default User;