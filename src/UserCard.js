import React from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  return (
    <div className="userCardParent">
      <div className="imgParent">
        <img className="img" src={props.avatar} />
      </div>
      <div className="infoParent">
        <div className="username">{props.username}</div>
        <Link to={`/profile/${props.username}`}>
          <button className="seeProfile">See Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
