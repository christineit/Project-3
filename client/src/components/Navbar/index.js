import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
// import { NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
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
      <div style={{ position: "fixed", width: "100%" }}>
        <Navbar color="light" light expand="md">
          <NavbarBrand>LikeHotCakes.com</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/cart"
                  activeClassName="active"
                >
                  Cart
                </NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/products"
                  activeClassName="active"
                >
                  Products
                </NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/admin"
                  activeClassName="active"
                >
                  Admin
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Project
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://github.com/christineit/Project-3">
                      GitHub
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://www.linkedin.com/in/scott-wittenberg-6475b052/">
                      Scott
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
