import React from "react";
// import Container from "../components/Container";
import { Container, Row, Col } from "reactstrap";
import Popup from "../components/Popup";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import Carousel from "../components/Carousel";
import Button from "../components/Button";
import "./Home.css";
import ProductYeet from "../components/ProductDisplay/ProductYeet";
import CartPage from "./Cartpage";

// export default class Home extends React.Component {
function Home(props) {
  // render() {
  return (
    <div className="background">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Home Page</h1>
            <Carousel style={{ padding: "50px" }} />
            <Card />
          </Col>
          <Col>
            <CartPage client={props.client} />
          </Col>
        </Row>
        <ProductYeet />
      </Container>
    </div>
  );
  // }
}
export default Home;
