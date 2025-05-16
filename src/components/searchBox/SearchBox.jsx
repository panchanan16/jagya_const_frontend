import useSearch from "@/hooks/useSearch";
import React, { useState } from "react";

function SearchBox({ SearchEntity }) {
  const [searchTerm, setSearchTerm] = useState(null);
  const { itemList } = useSearch(searchTerm, SearchEntity);

  function handleChangeSearchInput(e) {
    setSearchTerm(e.target.value);
  }

  function clearSearchInput() {
    setSearchTerm("");
  }


  function addNewsearch(params) {
     const param = params;
     return param.id == 3
  }
  return (
    <div className="search flex align-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="search-icon"
      >
        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
      </svg>
      <input
        type="text"
        id="searchQuery"
        value={searchTerm}
        placeholder="Search"
        onChange={handleChangeSearchInput}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="times"
        className="close"
        onClick={clearSearchInput}
      >
        <path
          fill="##000000"
          d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
        ></path>
      </svg>
    </div>
  );
}

export default SearchBox;
