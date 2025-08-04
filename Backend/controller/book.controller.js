 import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
        console.log("Response:", res);

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};


export const createBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;

    // Optional: Basic validation
    if (!name || !price || !category || !title) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newBook = new Book({ name, price, category, image, title });
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    console.log("Create Book Error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};