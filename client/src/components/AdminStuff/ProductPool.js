import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap"
import API from "../../utils/API"
import ProdForm from "./ProdForm"
export default class ProductPool extends React.Component {
    state = {
        productlist: []
    }


    componentDidMount = () => {
        API.
            getAllProducts().then(res => {
                console.log(res.data)
                this.setState({ productlist: res.data })
            })
    }

    getProducts = () => {

        console.log("yeet going on")
        API.
            getAllProducts().then(res => {
                console.log(res.data)
                this.setState({ productlist: res.data })
            })
    }
    // handleFormSubmit = e => {
    //     e.preventDefault();
    //     let formData = {
    //         productname: this.state.productname,
    //         category: this.state.category,
    //         size: this.state.size,
    //         quantity: this.state.quantity,
    //         description: this.state.description,
    //         price: this.state.price,
    //         images: this.state.images,
    //         keywords: this.state.keywords,

    //     }
    //     console.log("line 41 prodform.js", formData);

    //     API
    //         .saveProduct(formData)
    //         .then(res => console.log("Book Saved, line 45 prodform.js"))
    //         .catch(err => console.log(err));
    //     console.log(this.state)
    // }

    sellProduct = (id) => {
        console.log("sellproduct yeet")
        API.sellProduct(id).then(res => {
            console.log(res)
        })

    }
    render() {
        return (
            <div>
                <Jumbotron>
                    Test Pool
                    {/* provide radio buttons for form to turn on selling:true */}
                    <button onClick={this.getProducts} >Get Products</button>
                    {
                        this.state.productlist.map(product => {

                            return (


                                <div key={product._id}>
                                    <Button id={product._id} onClick={() => this.sellProduct(product._id)}>Sell Item </Button>
                                    name: {product.productname},
                                    description: {product.description},
                                    category:{product.category},
                                    size:{product.size},
                                    quantity:{product.quantity},
                                    price:{product.price},
                                    images: {product.images}
                                </div>

                            )
                        })
                    }
                </Jumbotron>
            </div>
        )
    }
}