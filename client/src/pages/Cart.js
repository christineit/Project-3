import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import Cart from "../Cart";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      backdrop: false
    };

    this.toggle = this.toggle.bind(this);
    this.CalculateTotalAmount = this.CalculateTotalAmount.bind(this);
    this.CheckOutMessage = this.CheckOutMessage.bind(this);
    this.isCheckout = false;
  }
  CheckOutMessage() {
    var cart = this.props.cart;

    if (cart.length > 0) {
      this.toggle();
    } else {
      <Redirect to="/" />;
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  CalculateTotalAmount(cart) {
    var amount = 0;
    for (var item of cart) {
      amount += item.units * item.price;
    }
    return amount.toFixed(2);
  }

  render() {
    const cart = this.props.cart;
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
          size="lg"
        >
          <ModalBody>
            <h1>Cart</h1>
            <Cart
              cart={cart}
              removeFromCart={this.props.removeFromCart.bind(this)}
            />
          </ModalBody>
          <h5>
            <span className="label label-default">
              Total Amount: {this.CalculateTotalAmount(cart)}
            </span>
          </h5>
          <ModalFooter>
            <Button color="success" onClick={this.CheckOutMessage}>
              CheckOut
            </Button>{" "}
            <Link to="/">
              <Button color="secondary">Close</Button>
            </Link>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={!this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
          size="lg"
        >
          <ModalBody>
            <Alert color="success">
              <h4 className="alert-heading">Thanks for Shopping</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button className="info" href="http://localhost:3000/">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CartPage;
