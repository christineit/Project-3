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
        <CardBody>
          <CardTitle>Product Description</CardTitle>
          <CardSubtitle>Something clever</CardSubtitle>
          <CardText>This is pretty awesome</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Description;
