import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/scores" component={Scores} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
//switch seperates the routes

export default App;
