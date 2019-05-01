import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

class CardProduct extends Component {
  render() {
    var cartItem = this.props.cartItem;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={cartItem.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{cartItem.name}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardProduct;
