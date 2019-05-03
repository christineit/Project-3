import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Cartpage from "./pages/Cartpage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Cart from "./components/shopify/Cart";
import CartPage from "./pages/Cartpage.js";

function App(props) {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/cart"
            render={() => <CartPage client={props.client} />}
          />
          <Route exact path="/products" component={Products} />
          <Route exact path="/admin" component={Admin} />
          {/* <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
