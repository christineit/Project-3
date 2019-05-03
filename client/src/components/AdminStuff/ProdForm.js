import React from "react"
import { Jumbotron, Container } from 'reactstrap';
import CreateProductForm from './CreateProductForm'
export default class ProductCreate extends React.Component {

    state = {
        productname: "",
        category: "",
        size: "",
        quantity: 0,
        description: "",
        price: 0,
        images: "",
        keywords: ""

    }

    handleInputChange = e => {
        let value = e.target.value;
        let yeet = e.target.name;
        let re = /^[0-9\b]+$/;

        if (e.target.type === "number" && !isNaN(value)) {

            this.setState({
                [yeet]: value
            })
        }

        if (e.target.type === "text" && !isNaN(value)) {
            console.log("okee")

        }
        else {
            console.log("inputs a letter")
            this.setState({
                [yeet]: value
            })
        }
        // if(yeet ==="price" && re)


    }

    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Sell A Product</h1>
                        <p className="lead">Specify product details below, then submit product to site</p>
                        <CreateProductForm
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}

                        />
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}