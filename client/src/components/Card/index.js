import React from "react";
const cardStyle = {
    textAlign: "center",
    backgroundColor: "white",
    padding: "15px",
    // height: "100px",
    maximumWidth: "100%"
  }


function Card() {
    return (
      <div className= "card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">Product Name</h5>
        <p className="card-text">Description</p>
        <p className="card-text">Price</p>
        <p className="card-text">Quantity</p>
        <button style={{float: "center"}}>Add to Cart</button>
      </div>
    </div>
    )
  }

  export default Card; 