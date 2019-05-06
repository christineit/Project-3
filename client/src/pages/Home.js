import React from "react";
// import Container from "../components/Container";
import { Container, Row, Col } from "reactstrap";
import Popup from "../components/Popup";
import Card from "../components/Card";
<<<<<<< HEAD
<<<<<<< HEAD
import Carousel from "../components/Carousel";
=======
<<<<<<< HEAD
import Button from "../components/Button";
// import Carousel from "../components/Carousel";
=======

>>>>>>> master
>>>>>>> 716c1b8d9dbcb735c1c77216e8679bd3e4704413
=======
import Button from "../components/Button";
import "./Home.css";
>>>>>>> c40199b53551bb298234e5602692531ee968681e

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Home Page</h1>
            <Carousel style={{ padding: "50px" }} />
            <Card />
          </Col>
        </Row>
      </Container>
    );
  }
}
