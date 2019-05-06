import React from "react";
import AdminForm from "../components/AdminStuff/AdminForm";
import ProdForm from "../components/AdminStuff/ProdForm";
import SomeComponent from "../components/Account";
import { FirebaseContext } from "../components/Firebase";
import AdminLogin from "../components/AdminStuff/AdminLogin";

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        {/* <SomeComponent /> */}
        <FirebaseContext.Consumer>
          {firebase => {
            return (
              <AdminForm firebase={firebase} />,
              <AdminLogin firebase={firebase} />
            );
          }}
        </FirebaseContext.Consumer>
        <ProdForm />
      </div>
    );
  }
}
