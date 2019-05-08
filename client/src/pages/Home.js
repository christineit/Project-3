import React from "react";
// import Container from "../components/Container";
import { Container, Row, Col } from "reactstrap";
import Popup from "../components/Popup";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import "./Home.css";
import ProductYeet from "../components/ProductDisplay/ProductYeet";
import CartPage from "./Cartpage";
import Shop from "../shop";
<<<<<<< HEAD
import Footer from "../components/Footer/index";
// export default class Home extends React.Component {
import storeImage from "../Images/arms.jpg";
=======
import Footer from "../components/Footer"
import CustomCart from "./customcart.js";

// export default class Home extends React.Component {
import storeImage from "../images/arms.jpg";
>>>>>>> be625436f83e9eef72cafb49b7b63b0f32dac6d7
const homeStyle = {
  backgroundImage: `url(${storeImage})`
};

function Home(props) {
  // render() {
  return (
    <div className="background" style={homeStyle}>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Home Page</h1>
            <Carousel style={{ padding: "50px" }} />
<<<<<<< HEAD
          </Col>
          <Col>
            <CartPage client={props.client} />
=======
>>>>>>> be625436f83e9eef72cafb49b7b63b0f32dac6d7
          </Col>
          <Col>{/* <CartPage client={props.client} /> */}</Col>
        </Row>
        {/* <ProductYeet client={props.client} /> */}
        {/* <Shop client={props.client} /> */}
      </Container>

      <br />
      <br />
      <br />
      <br />

<<<<<<< HEAD
      <Footer />
=======
      <CustomCart />
      {/* <Footer /> */}
>>>>>>> be625436f83e9eef72cafb49b7b63b0f32dac6d7
    </div>
  );
  // }
}
export default Home;
