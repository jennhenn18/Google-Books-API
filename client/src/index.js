// import the appropriate react components, npm package, and files
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Trigger react to render our App application to the root located in the index.html file
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
