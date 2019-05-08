import React from "react";
import AdminForm from "../components/AdminStuff/AdminForm";
import ProdForm from "../components/AdminStuff/ProdForm";
import SomeComponent from "../components/Account";
import ProductPool from "../components/AdminStuff/ProductPool";
import AdminLogin from "../components/AdminStuff/AdminLogin";
import { FirebaseContext } from "../components/Firebase";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer/index";
// import storeImage from "../images/arms.jpg"
//   const homeStyle = {
//     backgroundImage: `url(${storeImage})`,

//   }
export default class Admin extends React.Component {
  // state={

  // }

  //   adminCheck(){
  //  const { email, passwordOne } = this.state;

  //     this.props.firebase
  //       .doSignInWithEmailAndPassword(this.state.email, this.state.password)
  //       // this.auth.signInWithEmailAndPassword(this.state.email, this.state.password);
  //       .then(authUser => {
  //         console.log("We are logged in!", authUser);
  //         // this.setState({ ...INITIAL_STATE });
  //       })
  //       .catch(error => {
  //         console.log("this is our error!!!", error);
  //       });

  //     // event.preventDefault();
  //   }
  render() {
    return (
      <div>
        <Container>
          <FirebaseContext.Consumer>
            {firebase => {
              return (
                <AdminForm firebase={firebase} />,
                <AdminLogin adminCheck={this.adminCheck} firebase={firebase} />
              );
            }}
          </FirebaseContext.Consumer>
          {/* <ProdForm /> */}
          {/* <ProductPool /> */}
        </Container>

        <Footer />
      </div>
    );
  }
}
