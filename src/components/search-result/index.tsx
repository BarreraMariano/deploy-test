import React from "react";
import { useSearchResults } from "hooks/search-result-hooks";
import { Link } from "react-router-dom";

function SearchResult() {
  const search = useSearchResults();
  return (
    <ul>
      {search.map((r) => (
        <li key={r.id}>
          <img src={r.thumbnail} alt="" />
          <h3>{r.title}</h3>
          <h4>{r.price}</h4>
          <Link to={"/item/" + r.id}>Ver mas</Link>
        </li>
      ))}
    </ul>
  );
}

export { SearchResult };
