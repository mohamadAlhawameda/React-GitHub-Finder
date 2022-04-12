import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="NotFound">
      <Link to="/">
        {" "}
        <button className="return" linkto="/">
          <strong>Back to search</strong>
        </button>
      </Link>

      <img src="https://i.stack.imgur.com/Hp57y.png" />
    </div>
  );
};

export default NotFound;
