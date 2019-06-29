import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import uuid from "uuid/v1";

const AddMovie = () => {
  const [, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setMovies(prevMovies => {
      return [...prevMovies, { name, price, id: uuid() }];
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
      <input
        type="text"
        name="price"
        value={price}
        onChange={handlePriceChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
