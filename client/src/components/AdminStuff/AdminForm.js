import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AdminForm extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="username">Admin Username</Label>
                    <Input type="username" name="username" id="username" placeholder="Hello Admin" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="secret stuff" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}