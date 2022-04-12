import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ProfileBottom from "./ProfileBottom";

function checkString(str) {
  //["h", "t","t", "p"].join("") ==> "http"
  const ourString = [str[0], str[1], str[2], str[3]];
  const http = "http";
  if (ourString.join("") === http) {
    return str;
  } else {
    return `https://${str}`;
  }
}

function ProfileTop() {
  return (
    <div>
      <Link to="/">
        {" "}
        <button className="return" linkto="/">
          <strong>Back to search</strong>
        </button>
      </Link>
      <div id="App">
        <Info />
      </div>
      <br />
      <div>
        <ProfileBottom />
      </div>
    </div>
  );
}

function Info() {
  const params = useParams();
  const [list, setAvatar] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //alert('Mounted');
    fetch(`https://api.github.com/users/${params.userId}`)
      .then((x) => x.json())
      .then((json) => {
        setAvatar(json);
        setLoading(false);
      });
  }, []);

  if (loading == true) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div id="avatar">
        <img max width="300px" src={list.avatar_url}></img>
      </div>

      <div className="flexbox-container">
        <div id="name">
          <strong>Name:</strong> {list.name ? list.name : "Not available"}{" "}
          &nbsp;
        </div>
        <div id="username">
          <strong>UserName:</strong> {list.login}&nbsp;
        </div>
        <div id="type">
          <strong>Type:</strong> {list.type}&nbsp;
        </div>
      </div>
      <br />
      <div className="second">
        <div id="location">
          <strong>Location:</strong>{" "}
          {list.location ? list.location : "Not available"}&nbsp;&nbsp;
        </div>
        <div id="website">
          <strong>Website:</strong>{" "}
          <a href={`${checkString(list.blog)}`}>
            {list.blog ? "Click here" : "Not available"} &nbsp;&nbsp;
          </a>
        </div>
        {
          <div id="twitter">
            <strong>Twitter:</strong>{" "}
            <a href={`https://www.twitter.com/${list.twitter_username}`}>
              {list.twitter_username ? "Click here" : "Not available"}
            </a>
          </div>
        }
        {
          <div id="twitter">
            <strong>GitHub:</strong> <a href={list.html_url}>Click here</a>
          </div>
        }
      </div>
    </div>
  );
}

export default ProfileTop;
