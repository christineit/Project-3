import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";

import Shopping_Logo from "../lib/logos/shopping_cart.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="menu">
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/">Shopping Cart</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/cart">
                  <img
                    src={Shopping_Logo}
                    width="30"
                    height="30"
                    className="rounded"
                    alt="..."
                    style={{ margin: "0px 20px" }}
                  />
                </Link>
                <Badge color="danger">{this.props.itemsInCart}</Badge>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
