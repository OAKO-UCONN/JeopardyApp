import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Game from "./pages/Game";
import "./components/stylesheets/content.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/scores" component={Scores} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
//switch seperates the routes

export default App;
