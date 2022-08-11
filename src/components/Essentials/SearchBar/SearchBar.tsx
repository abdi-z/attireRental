import React from "react";
import "./SearchBar.css";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <div className="searchBox">
      <input className="searchInput" type="text" name="" placeholder="                  e.g Two Piece" />
      <button className="searchButton">
        {/* href="#" */}
        <Search2Icon />
      </button>
    </div>
  );
};

export default SearchBar;
