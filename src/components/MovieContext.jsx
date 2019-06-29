import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: uuid()
    },
    {
      name: "Game of Thrones",
      price: "$12",
      id: uuid()
    },
    {
      name: "Inception",
      price: "$11",
      id: uuid()
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
