import React from "react";
import Popup from "reactjs-popup";

export default () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
        <div><h1>Popup content here !!</h1></div>
    </Popup>
);
