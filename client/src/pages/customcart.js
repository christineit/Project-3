import React, { Component } from "react";
import API from "../utils/API.js";

class CustomCart extends Component {
  state = {
    quantitySelected: 0,
    name: "tomShoe",
    price: 50,
    imgUrl:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:F2F2F2/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_M_Wool_Runner_Kotare_GREY_ANGLE_d5ff3b96-7251-4c1e-9ba8-c711434cc10d.png?v=1542061546"
  };

  handleDropdown = event => {
    console.log("we got dropped", parseInt(event.target.value));
    this.setState({ quantitySelected: parseInt(event.target.value) });
  };

  calculateTotal = () => {
    return this.state.quantitySelected * this.state.price;
  };

  purchase = () => {
    console.log("time to do some backend things!!");
    API.sellProduct("15cd1fe499c40973250018025").then(res => {
      console.log("helloooo", res);
    });
  };

  render() {
    const testItem = {
      name: "TOm Shoe",
      price: 50
    };
    console.log(this.state);
    return (
      <div>
        <img style={{ height: "100px" }} src={this.state.imgUrl} />
        <h1>Product: {this.state.name}</h1>
        <h1>Price: {this.state.price}</h1>

        <select value={this.state.value} onChange={this.handleDropdown}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>

        <h1> Total: {this.calculateTotal()} </h1>

        <button onClick={this.purchase}>Purchase!</button>
      </div>
    );
  }
}

export default CustomCart;
