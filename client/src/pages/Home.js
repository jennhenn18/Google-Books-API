// import all the things so we can get the homepage up and running with the report package and files/components
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// create a class component called Home so that we can update what is displayed on the homepage
class Home extends Component {
  // create a state for this component with an empty books array, a blank string for the query key, and a default message value
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // create a function that handles update the individual form field with the appropriate value. This is also passed to the form component so it can be invoked there.
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // create a function that triggers a GET request searched the Google Books API using the book title we added to the q field. Once there is a response update the state and add the data to the books API so it can be stored as a saved book. If there is an error or nothing is returned empty or there is an error update the state to an empty books array and the message to show that the user should try a different search query.
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // create a function that handles the form submission and triggers the getBooks function above that calls the API to search Google Books API and return the specific book. This is also passed to the form component.
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  // create a function that handles the user saving the book. If the user saves the book set a constant book equal to the book stored in state array. Once it gets that data trigger the API we created to update the database and store the book information (everything in the object below). Once we are good then trigger the getBooks function again.
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  // render the following stuff to the homepage
  render() {
    return (
      // create a grid using the bootstrap components we created
      <Container>
        <Row>
          <Col size="md-12">
          {/* create a hero for the homepage */}
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              {/* import the form component here and add the handleInputChange, handleFormSubmit and q props */}
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {/* create a card that will render the result data. If the books array is not empty then return the books information that is stored there. If the books array is empty then display the message also in the state. Also render a button where users can save the book. If this is clicked the it triggers the handleBookSave function */}
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export the home component
export default Home;
