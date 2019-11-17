// import the React package as well as the router and styling files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// create a React class component called Nav
class Nav extends Component {
  // set the default state for the nav bar to be closed by default and the width to be the innerWidth of the window
  state = {
    open: false,
    width: window.innerWidth
  };

  // create a function to update the width
  updateWidth = () => {
    // create a constante NewState that updates the state width: to a new window.innerwidth
    const newState = { width: window.innerWidth };

    // create a conditional that if the state open and new state width are greater than 991 then set the newState open to false
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    // update the component state to false
    this.setState(newState);
  };

  // create a function that updates the toggles the sub nav
  toggleNav = () => {
    // update the state of the key open to opposite of the current state (this is possible since it is a boolean)
    this.setState({ open: !this.state.open });
  };

  // componentDidMount is called once the component has rendered to the DOM and triggers an event listen that resizes and runs the function UpdateWidth
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // this function will be trigger right before the component is removed from the DOM. Once this is triggered it will remove the event listener that triggers the resize using the updateWidth function
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  // since this is class component we need to use the render function to return what we to display
  render() {
    return (
      // create the nav bar using pre-defined terms and styling from Bootstrap
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* Create a link that takes users to the home page and call the link Google Books */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* Create a button with the following data points. Upon click it should trigger the toggleNav function */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* create a div with a class navbar-collapse when the state of the nav bar is collpased */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          {/* create an unorder listed that contains links */}
          <ul className="navbar-nav">
            {/* create a list item that is link to the homepage with the name Search*/}
            <li className="nav-item">
              {/* create an onclick that triggers the toggleNav function above */}
              <Link 
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            {/* create a list item that send users to the Saved books page */}
            <li className="nav-item">
              {/* create an onclick that triggers the toggleNav function */}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// export the nav component
export default Nav;
