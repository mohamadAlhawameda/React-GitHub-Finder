import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ProfileBottom() {
  const params = useParams();
  const [list, setAvatar] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
      <ul>
        <li id="followers">
          Followers: <br />
          <p className="iNum">{list.followers} </p>
        </li>
        <li id="following">
          Following: <br />
          <p className="iNum">{list.following}</p>
        </li>
        <li id="publicRepos">
          Public Repos: <br />
          <p className="iNum"> {list.public_repos} </p>
        </li>
        <li id="publicGists">
          Public Gists: <br />
          <p className="iNum">{list.public_gists} </p>
        </li>
      </ul>
    </div>
  );
}
