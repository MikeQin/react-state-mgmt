import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import MovieContextProvider from './components/MovieContext';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <AddMovie />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
