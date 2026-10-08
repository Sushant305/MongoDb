const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const cors = require("cors");

const ToDoListRouter = require("./routes/ToDoList");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the application",
  });
});

app.use("/api/ToDoList/", ToDoListRouter);

const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for the requests
    app.listen(PORT, () => {
      console.log(
        `Server is up and listening on port : http://localhost:${PORT} & connected to our database`,
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
