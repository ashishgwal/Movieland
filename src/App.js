import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

//7458b05//

const API_URL = 'http://www.omdbapi.com?apikey=7458b05';

//            
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovie = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovie('ALL');
  }, [] );
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
        placeholder="Search For Movies"
        value={searchTerm}
        onChange={ (e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt = "search"
        onClick= {() => searchMovie(searchTerm)}
        />
      </div>
      {movies?.length > 0
        ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard  movie={movie}/>
              ))}
            </div>
          ):(
              <div className="empty">
              <h2>No Movies Found</h2>
              </div>
            )}

      
    </div>
  );
}

export default App;
