import React from "react";
const footerStyle = {
    textAlign: "center",
    backgroundColor: "white",
    borderTop: "3px solid yellow",
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%"
  }
function Footer() {
    return (
    <div className="card" style={footerStyle}>      
        <div className="row"style={footerStyle}>
        <div className="col">
        
       </div>
       <div class="col">
        <div className="card-body">
          <h5 className="card-title" style={footerStyle}>Copyright © 2019</h5>
        </div>
        </div>
        <div class="col">
          <a  href="https://github.com/christineit/Project-3">GITHUB</a>
          </div>
      </div>
      </div>
    )
  }
  
  export default Footer;    