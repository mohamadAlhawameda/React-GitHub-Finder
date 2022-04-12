import React from "react";
import UserCard from "./UserCard";

const Card = (props) => {
  return (
    <div className="card">
      {props.result.map((item) => (
        <UserCard
          key={item.node_id}
          avatar={item.avatar_url}
          username={item.login}
          url={item.html_url}
        />
      ))}
    </div>
  );
};

export default Card;
