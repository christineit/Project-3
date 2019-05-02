import React from "react";
import AdminForm from "../components/AdminStuff/AdminForm";
import ProdForm from "../components/AdminStuff/ProdForm";
import SomeComponent from "../components/Account";

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        Nav Working Admin
        <SomeComponent />
        <AdminForm />
        <ProdForm />
      </div>
    );
  }
}
