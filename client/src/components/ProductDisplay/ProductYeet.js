import React, { Component } from 'react';
import API from "../../utils/API"
// import ProductCarousel from "./ProductCarousel"
export default class ProductYeet extends React.Component {
    state = {
        sellingProduct: []
    }

    componentDidMount = () => {
        API.getSellingProduct().then(res => {
            console.log(res.data)
            this.setState({ sellingProduct: res.data })
        })
    }

    render() {
        return (
            <div>
        {
            this.state.sellingProduct.map(product => {

                return (
                    <div key={product._id}>
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
        </div>
        )
    }
}