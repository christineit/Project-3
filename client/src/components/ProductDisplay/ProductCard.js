import React from "react";


import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";

const Description = props => {
    return (
        <div>
            <Card>
                <CardBody className="text-center">
                    <CardTitle>{props.product.productname}</CardTitle>
                    <CardSubtitle>{props.product.description}</CardSubtitle>
                    <CardSubtitle>{props.product.category}</CardSubtitle>
                    <CardSubtitle>{props.product.price}</CardSubtitle>
                    <CardSubtitle>{props.product.quantity}</CardSubtitle>
                    <CardText>Bristine</CardText>
                    <Button>Add to Cart , Future SHopify BUtton</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Description;
