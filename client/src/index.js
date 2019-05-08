import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./components/Firebase";
// import "bootstrap/dist/css/bootstrap.min.css";
import Client from "shopify-buy";

import "./app.css";
const client = Client.buildClient({
  storefrontAccessToken: "55973bfbbf6eae6e21e02d122de41a08",
  domain: "https://pacific-wildwood-37887.herokuapp.com/"
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App client={client} />,
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
