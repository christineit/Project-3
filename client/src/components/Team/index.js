import React from "react";
const teamStyle = {
  textAlign: "center",
 
  opacity: "0.5",
}

function Teaminfo() {
  return (
    <div className="jumbotron jumbotron-fluid" style={teamStyle}>
      <div className="container" >
        <h1 className="display-4">The Team</h1>
        <p className="lead">Christine Trinh</p>
        <p className="lead">Peter Stone</p>
        <p className="lead">Adam Rajchwald</p>
        <p className="lead">Scott Wittenberg</p>
        <p className="lead">Chris Jones</p>
        <p className="lead">Irfan Patel</p>
      </div>
    </div>



  )
}

export default Teaminfo;