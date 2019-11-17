const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a book schema so that saved books can be stored in the DB
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

// export this schema
module.exports = Book;
