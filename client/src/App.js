// import react so you we use the React package 
import React from "react";
// import npm package react router along with the different components so we can enable routing using react
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import the different components we will use in this file
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// create the app function they will render the different React components
function App() {
  return (
    // add the Router component that will enable us to create and route to the diffferent areas of the application
    <Router>
      <div>
        {/* add Navigation bar component */}
        <Nav />
        {/* add links to the sub nav bar using the React router npm package */}
        <Switch>
          {/* Setup route with the exact path that will direct us to the home page imported above */}
          <Route exact path="/" component={Home} />
          {/* setup a route with the exact path of /saved that will take us to the saved page */}
          <Route exact path="/saved" component={Saved} />
          {/* setup a blank route that will dispaly the nomatch page */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// export the app
export default App;
