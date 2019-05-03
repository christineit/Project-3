import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "your-access-token",
  domain: "your-shopify-url.myshopify.com"
});
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />,
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
