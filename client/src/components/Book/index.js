// import React and our bootstrap setup as well as styling file
import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";


// create a book component and bass in the all of the book data we can to display for a book. This is a child component that is used on the homepage and saved pages
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    // create and a render a list item that returns all of the specific book data passed through as props. This includes the book title, subtitle, authors, links, description, etc. 
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
