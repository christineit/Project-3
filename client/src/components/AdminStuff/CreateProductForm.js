import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
function CreateProductForm(props) {


    return (
        <Form>
            <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input name="productname" id="productname" placeholder="Display name of product" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="category">Category</Label>
                <Input name="category" id="category" placeholder="ex. clothing, decoration, food" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="price">Price</Label>
                <Input name="price" id="price" placeholder="$" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Input name="quantity" id="quantity" placeholder="" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="size">Size</Label>
                <Input name="size" id="size" placeholder="XS-XL, N/A" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="images">Related Images</Label>
                <Input name="images" id="images" placeholder="" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="keywords">Keywords</Label>
                <Input type="textarea" name="keywords" id="keywords" placeholder="separate with coma" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" onChange={props.handleInputChange} />
            </FormGroup>
            <Button onClick={props.handleFormSubmit}>Submit</Button>
        </Form>
    );

}
export default CreateProductForm;