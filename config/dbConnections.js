<<<<<<< HEAD
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

=======
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

>>>>>>> cdf2ca0 (initial Commit)
module.exports = connectDb;