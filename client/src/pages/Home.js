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
import Footer from "../components/Footer";
import CustomCart from "./customcart.js";

// export default class Home extends React.Component {
// import storeImage from "../images/arms.jpg";
// const homeStyle = {
//   backgroundImage: `url(${storeImage})`
// };

function Home(props) {
  // render() {
  return (
    <div className="background">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <br></br>
            <br></br>
            <br></br>
            <Carousel style={{ padding: "50px" }} />
          </Col>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            
            <Card style={{ padding: "50px" }} />
          </Col>
          
          {/* <Col><CartPage client={props.client} /></Col> */}
        </Row>
        {/* <ProductYeet client={props.client} /> */}
        <Shop client={props.client} />
          
      </Container>

     

      {/* <CustomCart /> */}
      <Footer />
    </div>
  );
  // }
}
export default Home;
