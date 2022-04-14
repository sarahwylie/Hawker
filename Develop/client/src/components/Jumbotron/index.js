//TODO: JUMBOTRON COMPONENT
//! Import dependencies
import React from "react";

//! Make the Jumbotron component
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;