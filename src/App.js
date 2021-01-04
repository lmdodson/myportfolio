import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio/" component={Portfolio} />
        <Route path="/resume/" component={Resume} />
      </div>
    </Router>
  );
}


export default App;
