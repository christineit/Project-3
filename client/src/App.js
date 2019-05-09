import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import CartPage from "./pages/Cartpage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shop from "./shop.js";
import Admin from "./pages/Admin";
import Cart from "./components/shopify/Cart";
// import CartPage from "./pages/Cartpage.js";
import Client from "shopify-buy";

import About from "../src/pages/About";

import CustomCart from "./pages/customcart.js";

function App(props) {
  // const client = Client.buildClient({
  //   storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  //   domain: "graphql.myshopify.com"
  // });
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              exact
              path="/"
              render={() => <Home client={props.client} />}
            />
            <Route
              exact
              path="/cart"
              render={() => <CartPage client={props.client} />}
            />
            <Route exact path="/products" component={Products} />
            <Route exact path="/customCart" component={CustomCart} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/about" component={About} />
            <Route
              path="/shop"
              component={() => <Shop client={props.client} />}
            />
            {/* <Route exact path="/books" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
