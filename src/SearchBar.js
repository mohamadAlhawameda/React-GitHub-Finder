import React, { useState } from "react";
import Card from "./Card";

function Searchbar() {
  const [search, setSearch] = useState("");

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${search}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setResult(data.items);
        setLoading(false);
      });
  };

  return (
    <div className="parent">
      <h1 className="header">Github Search Engine</h1>
      <div className="searchBar">
        <form onSubmit={onSubmit}>
          <input
            placeholder="Search by username"
            className="textInput"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>

      {!loading && result.length > 0 && <Card result={result} />}
      {!loading && result.length === 0 && (
        <div className="noAccounts">No Accounts Found!</div>
      )}
    </div>
  );
}

export default Searchbar;
