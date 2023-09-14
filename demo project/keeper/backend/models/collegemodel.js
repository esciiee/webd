const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Your name cannot exceed 30 characters"]
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid email address"]
    },
    password:{
        type: String,
        required: [true, "Please enter your password"],
        minlength: [6, "Your password must be longer than 6 characters"],
        select: false
    },
    phoneNunber:{
        type: String,
        required: [true, "Please enter your phone number"],
        maxLength: [10, "Your phone number cannot exceed 10 characters"]
    },
    panDetails:{
        type: String,
        required: [true, "Please enter your pan details"],
        maxLength: [10, "Your pan details cannot exceed 10 characters"]
    },
    address:{
        type: String,
        required: [true, "Please enter your address"],
        maxLength: [10, "Your address cannot exceed 10 characters"]
    },

});