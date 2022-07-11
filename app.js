import "dotenv/config";
import express from "express";
const app = express();

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use("/", (req, res) => {
  res.send("hello its working");
});

// looks for the req that does not match the routes
app.use(notFoundMiddleware);
// looks for erros that happening inisde the existing routes
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is listening on ${port}`));
