const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});


//config
dotenv.config({ path: "backend/config/config.env" });


//connect to database
connectDatabase();


// listen to server
server = app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
