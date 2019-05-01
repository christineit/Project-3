import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Input,
  Button,
  Collapse,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { Link } from "react-router-dom";

class ShopCard extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false, qunatity: 1 };
    this.func = this.func.bind(this);
  }

  mouseOut() {
    this.setState({ collapse: !this.state.collapse });
  }

  mouseOver() {
    this.setState({ collapse: !this.state.collapse });
  }

  func(id) {
    var val = document.getElementById("ShopCardInput" + id).value;
    return val;
  }

  render() {
    const product = this.props.product;
    return (
      <Card
        id={"ShopCard" + product._id}
        onMouseOut={() => this.mouseOut()}
        onMouseOver={() => this.mouseOver()}
      >
        <Link to={"/product/" + product._id}>
          <CardImg
            id={"ShopCardImg" + product._id}
            top
            width="100%"
            src={product.image}
            alt="Card image cap"
          />
          <CardBody id={"ShopCardBody" + product._id}>
            <CardTitle id={"ShopCardTitle" + product._id}>
              {product.name}
            </CardTitle>
            <CardSubtitle id={"ShopCardSubtitle" + product._id}>
              Price: {product.price}
            </CardSubtitle>
          </CardBody>
        </Link>
        <Collapse
          id={"ShopCardCollapse" + product._id}
          isOpen={this.state.collapse}
        >
          <InputGroup id={"ShopCardInputGroup" + product._id}>
            <Input
              id={"ShopCardInput" + product._id}
              type="number"
              placeholder="Enter Quantity"
              min="1"
            />
            <InputGroupAddon
              id={"ShopCardInputGroupAddOn" + product._id}
              addonType="append"
            >
              <Button
                id={"ShopCardButton" + product._id}
                size="lg"
                color="success"
                onClick={() =>
                  this.props.addProduct(product, this.func(product._id))
                }
              >
                Add to Cart
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Collapse>
      </Card>
    );
  }
}

export default ShopCard;
