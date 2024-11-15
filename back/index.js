require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user");

const corsOptions = {
  origin: process.env.ORIGIN,
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
};

const PORT = process.env.PORT;

app.use(cors(corsOptions));

// User route
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
