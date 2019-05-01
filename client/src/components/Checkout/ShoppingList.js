import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ShopCard from "./ShopCard";

class ShoppingList extends Component {
  render() {
    const products = this.props.products;
    var a = products.map(product => (
      <Col key={"ShoppingListCol" + product._id} xs="6" sm="4">
        <ShopCard
          key={"shopCart " + product._id}
          product={product}
          addProduct={this.props.addProduct.bind(this)}
        />
      </Col>
    ));
    var arrays = [],
      size = 3;

    while (a.length > 0) arrays.push(a.splice(0, size));

    for (var i = 0; i < arrays.length; i++) {
      a[i] = arrays[i];
    }
    return (
      <div id="shoppingList">
        <Container id="container">
          {a.map((row, index) => (
            <div key={"ShoppingListDiv" + index}>
              <Row key={"ShoppingListRow" + index}>{row}</Row>
              <br />
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default ShoppingList;
