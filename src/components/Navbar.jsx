import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className={style.navbar}>
      <h3>Mike</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Navbar;
