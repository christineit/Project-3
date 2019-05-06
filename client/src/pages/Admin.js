import React from "react";
import AdminForm from "../components/AdminStuff/AdminForm";
import ProdForm from "../components/AdminStuff/ProdForm";
// import SomeComponent from "../components/Account";
import { FirebaseContext } from "../components/Firebase";
import ProductPool from "../components/AdminStuff/ProductPool"

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        Create an Admin!
        {/* <SomeComponent /> */}
        <FirebaseContext.Consumer>
          {firebase => {
            return <AdminForm firebase={firebase} />;
          }}
        </FirebaseContext.Consumer>
        <ProdForm />
        <ProductPool />
      </div>
    );
  }
}
