import "dotenv/config";

import express from "express";
const app = express();

import connectDB from "./config/connect.js";
import todosRouter from "./routes/todos.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// routes
app.get("/", (req, res) => {
  res.send("<h1>checking routes</h1><a href='/api/v1/todo'>ToDo Route</a>");
});

// toDo routes
app.use("/api/v1/todo", todosRouter);

// looks for the req that does not match the routes
app.use(notFoundMiddleware);
// looks for erros that happening inisde the existing routes
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
