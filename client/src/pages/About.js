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

// export default class Home extends React.Component {
<<<<<<< HEAD
import storeImage from "../Images/arms.jpg";
const homeStyle = {
  backgroundImage: `url(${storeImage})`
};
function About(props) {
  // render() {
  return (
    <div className="background" style={homeStyle}>
      <Container>
        <br />
        <br />
        <Teaminfo />
      </Container>

      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
=======
import storeImage from "../images/arms.jpg"
// const homeStyle = {
//   backgroundImage: `url(${storeImage})`,

// }
function About(props) {
  // render() {
  return (

    <div className="background">
      <Container>
        <br></br>
        <br></br>
        <Teaminfo />

      </Container>



      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>





>>>>>>> be625436f83e9eef72cafb49b7b63b0f32dac6d7
  );
  // }
}
export default About;
