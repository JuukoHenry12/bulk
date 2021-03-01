import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./componets/NavBar";
import Home from "./componets/Home";
import ProductDescription from "./componets/ProductDescription";
import About from "./componets/about";
import Pricing from "./componets/Pricing";
import Contact from "./componets/Contact";
import Productfeature from "./componets/productfeature";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route
            exact
            path="/productdescription"
            component={ProductDescription}
          >
            <ProductDescription />
          </Route>
          <Route exact path="/product" component={Productfeature}>
            <Productfeature />
          </Route>

          <Route exact path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
          
          <Route exact path="/about" component={About}>
            <About />
          </Route>
          
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
