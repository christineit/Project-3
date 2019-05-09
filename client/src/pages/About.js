import React from "react";
// import Container from "../components/Container";
import { Container, Row, Col } from "reactstrap";
import Popup from "../components/Popup";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import Carousel from "../components/Carousel";
// import ProductYeet from "../components/ProductDisplay/ProductYeet"
import "./Home.css";
import ProductYeet from "../components/ProductDisplay/ProductYeet";
// import CartPage from "./Cartpage";
import Footer from "../components/Footer/index";
import Teaminfo from "../components/Team/index";
import Particles from "react-particles-js";

function About(props) {
  // render() {
  return (
    <div>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
      <div className="background">
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Teaminfo />
        </Container>
        <Footer />
      </div>
    </div>
  );
  // }
}
export default About;
