// import all the bullshit
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// create a class component called Saved that will hold and control what displays on our Saved page
class Saved extends Component {
  // create a state with an empty array
  state = {
    books: []
  };

  // Once the compoment loads trigger the getSavedBooks function below
  componentDidMount() {
    this.getSavedBooks();
  }

  // upon being triggered run the API call using axios setup in the utils folder to grab all of the users saved books. Upon return update the state of the empty books array to include the data (aka books). If there is an error log it
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // create a function that deletes a specific book from the saved books lists. This function triggers the deletebook route we created in the utils folder. Upon response run the getsavedbooks function that updates the state of the book array.
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      // use all of the styling components we created to enable bootstrap in react
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {/* If there are books in the array display each book as a List and display the following details for reach book. Also render a delete button that when it's clicked it triggers the handleBookDelete function passing it the specific book id. If there is nothing in the books array show No Saved Books */}
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export the saved component
export default Saved;
