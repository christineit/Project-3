import React from "react";
// import Container from "../components/Container";
import { Container, Row, Col } from "reactstrap";
import Popup from "../components/Popup";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Home Page</h1>
            <Carousel />
          </Col>
        </Row>
        <Card />
      </Container>
    );
  }
}
