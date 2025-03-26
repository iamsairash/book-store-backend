const express = require("express");
const Book = require("../models/book.models");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateABook,
  deleteABook,
} = require("../controllers/book.controllers");

const router = express.Router();

//post a book
router.post("/create-book", postABook);

//get all books
router.get("/", getAllBooks);

//get single book
router.get("/:id", getSingleBook);

//update a book
router.put("/edit/:id", updateABook);

//delete a Book
router.delete("/delete-book/:id", deleteABook);

module.exports = router;
