import React from "react";
import "./style.css";

// exports the Jumbotron components

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
