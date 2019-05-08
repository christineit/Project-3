import React from "react";
const footerStyle = {
  textAlign: "center",
  backgroundColor: "white",
  borderTop: "1px solid black",
  textAlign: "center",
  padding: "15px",
  left: "0",
  bottom: "0",
  height: "20px",
  width: "100%"
};
const iconstyle = {
  color: "black"
};

function Footer() {
  return (
    <div className="card">
      <div className="row">
        {/* <div className="card-body"> */}
        <div class="col">
          <a href="https://github.com/christineit/Project-3" target="_blank">
            <i
              class="fab fa-github"
              style={{ color: "black", fontSize: "50px" }}
            />{" "}
          </a>
          {/* <div class="col">
            <a href="https://facebook.com">
              <i
                class="fab fa-facebook"
                style={{ color: "blue", fontSize: "100px" }}
              />{" "}
            </a>
          </div>
          <div class="col">
            <a href="https://twitter.com">
              <i
                class="fab fa-twitter"
                style={{ color: "lightblue", fontSize: "100px" }}
              />{" "}
            </a>
          </div> */}
          <h5 className="card-title" style={footerStyle}>
            Copyright © 2019
          </h5>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Footer;
