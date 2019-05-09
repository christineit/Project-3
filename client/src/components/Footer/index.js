import React from "react";
const footerStyle = {
  position: "fixed",
  textAlign: "center",
  backgroundColor: "white",
  borderTop: "1px solid black",
  textAlign: "center",
  padding: "15px",
  left: "0",
  bottom: "0",
  height: "90px",
  width: "100%"
};

function Footer() {
  return (
    <footer className="card" style={footerStyle}>
      {/* <div className="row"> */}
      {/* <div className="card-body"> */}
      {/* <div class="col"> */}
      <a href="https://github.com/christineit/Project-3" target="_blank">
        <i
          class="fab fa-github"
          style={{
            color: "#1b2024",
            fontSize: "50px",
            textAlign: "center"
          }}
        />
        <p
          className="githubLink"
          // style={{
          //   color: "#1b2024"
          // }}
        >
          GitHub
        </p>
      </a>
      {/* <h5 className="card-title">Copyright © 2019</h5> */}
      {/* </div> */}
      {/* </div> */}
    </footer>
    // </div>
  );
}

export default Footer;
