const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// route imports

const notes = require("./routes/notesRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", notes);
app.use("/api/v1", user);
//middleware to handle errors
app.use(errorMiddleware);   

module.exports = app;