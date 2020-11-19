import React from "react";

function Wrapper(props) {
  return <div className="container-fluid">{props.children}</div>;
}

export default Wrapper;
