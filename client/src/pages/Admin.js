import React from "react";
import AdminForm from "../components/AdminStuff/AdminForm";
import ProdForm from "../components/AdminStuff/ProdForm";
import SomeComponent from "../components/Account";
import ProductPool from "../components/AdminStuff/ProductPool";
import AdminLogin from "../components/AdminStuff/AdminLogin";
import { FirebaseContext } from "../components/Firebase";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer/index"
import storeImage from "../images/arms.jpg"
  const homeStyle = {
    backgroundImage: `url(${storeImage})`,
    
  }
export default class Admin extends React.Component {
  render() {
    return (
        <div style={homeStyle}>
      <Container>
          <FirebaseContext.Consumer>
            {firebase => {
              return (
                <AdminForm firebase={firebase} />,
                <AdminLogin firebase={firebase} />
              );
            }}
          </FirebaseContext.Consumer>
          <ProdForm />
          <ProductPool />
      </Container>

      <Footer />
        </div>
      
       
      
    );
  }
}
