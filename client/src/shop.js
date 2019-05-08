import React, { Component } from "react";
import Products from "./components/shopify/Products";
import Cart from "./components/shopify/Cart";
import API from './utils/API'

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

    API.getSellingProduct().then(res => {
      console.log('selling products we got back in the shop!!!', res.data)
      let arr = []
      arr.push(res.data)
      // this.setState({
      //   products: arr
      // });
    })

    this.props.client.product.fetchAll().then(res => {
      // let arr = [];
      console.log("single products FROM SHOPIFY NEEDS TO LOOK LIKE THIS", res[0]);
      var clone = Object.assign({}, res[0]);
      // clone.title = "TOM PRODUCT!!!!!!!";
      // arr.push(clone);


      API.getSellingProduct().then(res => {
        console.log('selling products we got back in the shop!!!', res.data)
        let arr = []

        clone.title = res.data.productname
        clone.price = res.data.price


        arr.push(clone)
        this.setState({
          products: [clone]
        });
      })



      // this.setState({
      //   products: arr
      // });
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
        var clone = Object.assign({}, res);
        // console.log("THIS IS THE CHECKOUT RES!!!!! ", clone.lineItems[0].title)


        // res.lineItems[0].title = 'TOM TEST IN CART'

        this.setState({
          checkout: clone
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
        <header className="App__header">
          {!this.state.isCartOpen && (
            <div className="App__view-cart-wrapper">
              <button
                className="App__view-cart"
                onClick={() => this.setState({ isCartOpen: true })}
              >
                Cart
              </button>
            </div>
          )}
          <div className="App__title">
            <h1>{this.state.shop.name}: React Example</h1>
            <h2>{this.state.shop.description}</h2>
          </div>
        </header>
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
