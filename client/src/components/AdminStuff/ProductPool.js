import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap"
import API from "../../utils/API"
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
        
    
 

    render() {
        return (
            <div>
                <Jumbotron>
                    Test Pool
                    {
                        this.state.productlist.map(product => {

                            return (
                                <div key={product._id}>
                                    name: {product.productname}
                                    description: {product.description}
                                    <Button id={product._id}>Sell Item </Button>
                                </div>
                            )
                        })
                    }
                </Jumbotron>
            </div>
        )
    }
}