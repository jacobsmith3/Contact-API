const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnections");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 3000; 

// Add CORS headers before other middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }
    next();
});

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use("/api/users", require("./routes/userroutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server port is ${port}.`);
});