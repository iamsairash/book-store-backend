const Book = require("../models/book.models");

const postABook = async (req, res) => {
  const { title, description, trending, category, oldPrice, newPrice } =
    req.body;
  const book = new Book({
    title,
    description,
    trending,
    category,
    oldPrice,
    newPrice,
  });

  try {
    await book.save();
    res.status(201).send({ book });
  } catch (err) {
    console.log("can't save the book" + err.message);

    res.status(400).send({ message: "unable to save book, try again" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.log("can't fetch the book" + error.message);

    res.status(400).send({ message: "unable to fetch book, try again" });
  }
};

const getSingleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).send({ message: "Book not found" });
    res.status(200).send(book);
  } catch (error) {
    console.log("can't fetch the book" + error.message);

    res.status(400).send({ message: "unable to fetch book, try again" });
  }
};

const updateABook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook)
      return res.status(404).send({ message: "Book not found" });
    res
      .status(200)
      .send({ message: "book updated successfully", book: updatedBook });
  } catch (error) {
    console.log("can't update the book" + error.message);

    res.status(400).send({ message: "unable to update book, try again" });
  }
};

const deleteABook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) return res.status(404).send({ message: "book not found" });
    res.status(200).send("book deleted successfully");
  } catch (error) {
    console.log("can't delete the book" + error.message);
    res.status(400).send({ message: "unable to delete the book" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateABook,
  deleteABook,
};
