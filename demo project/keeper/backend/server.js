const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");




connectDatabase();



app.listen( process.env.PORT , () => {
    console.log('server is working on http://localhost:' + process.env.PORT.toString());
})