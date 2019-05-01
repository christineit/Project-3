import React from "react";
import AdminForm from "../components/AdminStuff/AdminForm"
import ProdForm from "../components/AdminStuff/ProdForm"
export default class Admin extends React.Component {
    render() {
        return (
            <div>
                Nav Working Admin
                <AdminForm />
                <ProdForm />
            </div>
        )
    }
}