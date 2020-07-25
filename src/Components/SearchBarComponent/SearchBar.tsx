import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { IUserInput } from "../../Common/Interfaces";
import "./SearchBar.css";

interface ISearchBarProps {
  SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {
  const [SearchQuery, setSearchQuery] = useState<string | null>("");

  const handleSearchQueryChange = (s: string | null) => {
    setSearchQuery(s);
  };

  const handleSubmit = () => {
    if (
      SearchQuery?.length !== 0 &&
      SearchQuery !== null &&
      SearchQuery !== ""
    ) {
      let UserInput: IUserInput = {
        SearchQuery: SearchQuery,
      };
      props.SetUserInput(UserInput);
    } else {
      console.log("handleSubmit error");
    }
  };

  return (
    <div className="SearchBarContainer">
      <form className="Search-section">
        <TextField
          className="input"
          id="outlined-required"
          label="Click Search"
          variant="outlined"
          value={SearchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;
