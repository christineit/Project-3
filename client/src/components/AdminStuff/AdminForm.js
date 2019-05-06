import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import AdminLogin from "./AdminLogin";

export default class AdminForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleTyping = event => {
    console.log("what we typed", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
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
            <h3 className="text-center">CREATE AN ADMIN</h3>
            <Label for="username">Email:</Label>
            <Input
              type="email"
              name="email"
              id="newEmail"
              placeholder="Hello Admin"
              onChange={this.handleTyping}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password:</Label>
            <Input
              type="password"
              name="password"
              id="newPassword"
              placeholder="Password"
              onChange={this.handleTyping}
            />
          </FormGroup>
          {/* <Button>Submit</Button> */}
        </Form>
        <button onClick={this.onSubmit}>Create!</button>
        <AdminLogin />
      </div>
    );
  }
}
