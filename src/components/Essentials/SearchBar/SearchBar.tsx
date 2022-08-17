import React from "react";
import "./SearchBar.css";
import { Search2Icon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = React.useState("");
  let navigate = useNavigate();

  const onSubmit = () => {
    console.log(searchInput);
    axios
      .get("http://localhost:5000/api/attires/search/" + searchInput)
      .then((res) => {
        // console.log(res.data);
        navigate("/attires/search/" + searchInput, { state: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="                  e.g Hoodie"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="searchButton" onClick={onSubmit}>
        <Search2Icon />
      </button>
    </div>
  );
};

export default SearchBar;
