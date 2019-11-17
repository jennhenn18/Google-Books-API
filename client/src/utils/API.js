// import the axios npm package
import axios from "axios";

// export the following API routes to interact with the Google Books API
export default {
  // Gets books from the Google API
  // create a key "getBooks" set equal to a function that returns an axios get call and returns a book result from the google books api
  getBooks: function(q) {
    // using the proper route pass through the specific book
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
