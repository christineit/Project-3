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
import Particles from "react-particles-js";
import About from "../src/pages/About";

import CustomCart from "./pages/customcart.js";

function App(props) {
  const client = Client.buildClient({
    storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
    domain: "graphql.myshopify.com"
  });
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
            <Route path="/shop" component={() => <Shop client={client} />} />
            {/* <Route exact path="/books" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} /> */}
          </Switch>
          {/* <Particles
            params={{
              particles: {
                number: {
                  value: 160,

                  density: {
                    enable: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out"
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  }
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0
                  },
                  repulse: {
                    distance: 400,
                    duration: 4
                  }
                }
              }
            }}
          /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
