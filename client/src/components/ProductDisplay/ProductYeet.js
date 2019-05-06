import React, { Component } from 'react';
import API from "../../utils/API"
// import ProductCarousel from "./ProductCarousel"
export default class ProductYeet extends React.Component {
    state = {
        sellingProduct: null
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

                <div>
                    Name:
                    Category:
                </div>

            </div>
        )
    }
}