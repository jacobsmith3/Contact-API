<<<<<<< HEAD
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email:{
        type: String,
        required: [true, "Please add the contact email"],
    },
    phone:{
        type: String,
        required: [true, "Please add phone number"],
    }
    }, {
        timestamps: true,
    });

=======
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email:{
        type: String,
        required: [true, "Please add the contact email"],
    },
    phone:{
        type: String,
        required: [true, "Please add phone number"],
    }
    }, {
        timestamps: true,
    });

>>>>>>> cdf2ca0 (initial Commit)
module.exports = mongoose.model("Contact", contactSchema);