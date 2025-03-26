const express = require("express");
const main = require("./src/db/dbConfig.js");
require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5050;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

const bookRoute = require("./src/routes/book.routes.js");
app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("welcome to server");
});

main()
  .then(() => {
    app.on("error", (err) => {
      console.error("Error: " + err);
    });
    app.listen(port, () => {
      console.log(`server listening at port ${port}`);
    });
  })
  .catch((err) => {
    console.error("can't connect to db " + err.message);
  });
