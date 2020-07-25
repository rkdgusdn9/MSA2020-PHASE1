import React, { useState, useEffect } from "react";
import MovieCard from "../MediaCardComponent/MovieCard";
import { Grid } from "@material-ui/core";
import "./MovieList.css";

interface IMediaGridProps {
  SearchQuery: string | null;
}

function MovieList(props: IMediaGridProps) {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "http://www.omdbapi.com/?apikey=79df37f0&page=1&s=" + props.SearchQuery
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.Search);
      })
      .catch(console.log);
  }, [props.SearchQuery]);

  function MovieCardHandler() {
    const List = movies.map((movie, i) => {
      var ImageUrl = "";

      if (movie.Response === "False") {
        return;
      } else {
        ImageUrl = movie.Poster;
      }

      return (
        <Grid
          key={"card_" + i}
          item
          sm={6}
          md={4}
          lg={3}
          className="MediaGridCard"
        >
          <MovieCard
            ImageUrl={ImageUrl}
            title={movie.Title}
            description={movie.Year}
          />
        </Grid>
      );
    });
    return List;
  }

  const List = MovieCardHandler();

  return (
    <div>
      <Grid container spacing={3} className="MediaGridContainer">
        {List}
      </Grid>
    </div>
  );
}

export default MovieList;
