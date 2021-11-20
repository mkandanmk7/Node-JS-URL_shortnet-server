require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./DB/connectDB");

//routes

const app = express();
const port = process.env.PORT || 3001;

//db connect
connectDB();

//middlewares..

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running ");
});

//routes mw..

//server start

const server = app.listen(port, () =>
  console.log(`server is running at port ${port}`)
);

//handle exceptions

process.on("unhandledRejection", (error) => {
  console.log(error);
  server.close(() => process.exit(1));
});
