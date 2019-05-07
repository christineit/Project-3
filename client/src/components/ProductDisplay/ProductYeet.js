import React, { Component } from 'react';
import API from "../../utils/API"
// import ProductCarousel from "./ProductCarousel"
export default class ProductYeet extends React.Component {
    state = {
        productname: "",
        category: "",
        description: "",
        styleChange: false
        // img1="https://media.licdn.com/dms/image/C4E03AQH2SWTO8f_6yQ/profile-displayphoto-shrink_200_200/0?e=1560384000&v=beta&t=RMDyma2mVGDT9Im30IdndDZZJlknoVH5YFI9RQh2rk4"
    }

    componentDidMount = () => {
        API.getSellingProduct().then(res => {
            console.log(res.data)
            this.setState({
                productname: res.data.productname,
                category: res.data.category,
                description: res.data.description,
                // img1: res.data.img[0]
            })
        })
    }

    tomClicks = () => {
        this.setState({ styleChange: !this.state.styleChange })
        API.getSellingProduct().then(res => {
            console.log(res.data)
            this.setState({
                productname: res.data.productname,
                category: res.data.category,
                description: res.data.description,
                // img1: res.data.img[0]
            })
        })
    }

    render() {
        console.log(this.state)
        const mystyle = {
            titleStyle: {
                backgroundColor: this.state.styleChange ? 'red' : 'blue',
                color: this.state.styleChange ? 'green' : 'yellow'
            }
        }
        return (
            <div>
                {/* <ProductCarousel/> */}
                <div style={mystyle.titleStyle}> Name: {this.state.productname}</div>

                <div style={mystyle.titleStyle} >Category:{this.state.category}</div>

                <div style={mystyle.titleStyle}>description: {this.state.description}</div>

                <button onClick={this.tomClicks}>TOmclick</button>
            </div>
        )
    }
}