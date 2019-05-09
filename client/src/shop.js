import React, { Component } from "react";
import Products from "./components/shopify/Products";
import Cart from "./components/shopify/Cart";

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });

    this.props.client.product.fetchAll().then(res => {
      let arr = [];

      console.log("single products", res[0]);

      var clone = Object.assign({}, res[0]);
      clone.title = "Boot";

      arr.push(clone);

      this.setState({
        products: arr
      });
    });

    this.props.client.shop.fetchInfo().then(res => {
      this.setState({
        shop: res
      });
    });
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) }
    ];

    return this.props.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false
    });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App__header"> */}
        {!this.state.isCartOpen && (
          <div className="App__view-cart-wrapper">
            <button
              style={{
                position: "fixed",
                top: "17px",
                color: "black",
                right: "120px"
              }}
              className="App__view-cart fas fa-shopping-cart"
              onClick={() => this.setState({ isCartOpen: true })}
            />
          </div>
        )}
        {/* <div className="App__title">
          <h1>{this.state.shop.name}: Who want a boot?</h1>
          <h2>{this.state.shop.description}</h2>
        </div> */}
        {/* </header> */}
        <Products
          products={this.state.products}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
        />
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    );
  }
}

export default Shop;
