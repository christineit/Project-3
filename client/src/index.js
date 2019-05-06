import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./components/Firebase";
// import "bootstrap/dist/css/bootstrap.min.css";
import Client from "shopify-buy";

import "./app.css";
const client = Client.buildClient({
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  domain: "graphql.myshopify.com"
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App client={client} />,
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
