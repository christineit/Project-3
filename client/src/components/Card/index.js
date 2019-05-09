import React from "react";
const cardStyle = {
    textAlign: "center",
    // opacity: "0.5",
    padding: "15px",
    // height: "100px",
    maximumWidth: "100%",
    fontWeight: "bold",
    boxShadow: "4px 4px 15px 3px #03100bf7",
 background: "#2752ff",
 color: "white",
  }


function Card() {
    return (
      <div className= "card" style={cardStyle}>
      <div className="card-body">
        <h1 className="card-title"> "Here today, Gone Tomorrow" </h1>
        
       
        {/* <p className="card-text">Price</p>
        <p className="card-text">Quantity</p> */}
        
      </div>
    </div>
    )
  }

  export default Card; 