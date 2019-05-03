import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class AdminLogin extends React.Component {
  state = {
    email: "",
    password: "",
    authenticated: false
  };

  handleTyping = event => {
    console.log("what we typed", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      // this.auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      .then(authUser => {
        console.log("this is our user we just created!!!", authUser);
        // this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        console.log("this is our error!!!", error);
      });

    // event.preventDefault();
  };

  render() {
    console.log("this is my state", this.state);
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="username">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Hello Admin"
              onChange={this.handleTyping}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="Password"
              onChange={this.handleTyping}
            />
          </FormGroup>
          {/* <Button>Submit</Button> */}
        </Form>
        <button onClick={this.onSubmit}>Login!</button>
      </div>
    );
  }
}
