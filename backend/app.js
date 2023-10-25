const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());

// import routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

//mount routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
