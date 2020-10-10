import React from "react";
import { Link } from "react-router-dom";
function Button() {
  return (
    <div>
      <Link
        to="/game"
        className={
          window.location.pathname === "/game" ||
          window.location.pathname === "/"
            ? "nav-link active"
            : "nav-link"
        }
      >
        {" "}
        Button{" "}
      </Link>
    </div>
  );
}

export default Button;
