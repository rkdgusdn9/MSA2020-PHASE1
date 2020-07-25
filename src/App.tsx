import React, { useState } from "react";
import Head from "./Head";
import "./App.css";
import SearchBar from "./Components/SearchBarComponent/SearchBar";
import MovieList from "./Components/MediaGridComponent/MovieList";
import { IUserInput } from "./Common/Interfaces";

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <div className="head-container">
        <Head />
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
      </div>
      {UserInput.SearchQuery && (
        <MovieList SearchQuery={UserInput.SearchQuery} />
      )}
    </div>
  );
}

export default App;
