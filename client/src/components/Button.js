import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div>
      <Link to="/game" className="btn btn-outline-primary text-center">
        {" "}
        Start the Game!{" "}
      </Link>
    </div>
  );
}
export default Button;
