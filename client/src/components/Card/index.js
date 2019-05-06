import React from "react";
import "./style.css";

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
