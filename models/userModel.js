<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add the user name"],
    },
    email:{
        type: String,
        required: [true, "Please put in email"],
        unique: [true, "email address already taken"],
    },
    password:{
        type: String,
        required: [true, "Please add the password"],
    },
}, {
    timestamps: true,
});

=======
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add the user name"],
    },
    email:{
        type: String,
        required: [true, "Please put in email"],
        unique: [true, "email address already taken"],
    },
    password:{
        type: String,
        required: [true, "Please add the password"],
    },
}, {
    timestamps: true,
});

>>>>>>> cdf2ca0 (initial Commit)
module.exports = mongoose.model("User", userSchema);