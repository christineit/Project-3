import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class Cart extends Component {
  render() {
    const cart = this.props.cart;
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={"CartTableRow" + item._id}>
              <td>
                <img
                  src={item.image}
                  width="100"
                  height="100"
                  className="rounded"
                  alt="Cinque Terre"
                />{" "}
                {item.name}
              </td>
              <td>{item.units}</td>
              <td className="text-center">{item.price}</td>
              <td>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.props.removeFromCart(item._id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Cart;
