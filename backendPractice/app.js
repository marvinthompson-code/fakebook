const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

// Routers
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`APP is listening on PORT: ${PORT}`);
});
