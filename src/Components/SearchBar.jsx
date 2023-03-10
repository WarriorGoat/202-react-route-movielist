import { useState } from "react";
// import './Table';
import "./SearchBar.css";

function SearchBar() {
  // const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");

  // const filteredMovieList = movieList.filter(movie => {
  //     return movie.toLowerCase().includes(query.toLowerCase());
  // }, [movieList, query]
  // );

  // filteredList = {filteredMovieList.map(item => (
  //   this.state.movieList.))};

  console.log(query);
  // function onSubmit(e) {
  //     e.preventDefault();
  //     const value = inputRef.current.value;
  //     if (value === "")return;
  //     setItems(prev => {
  //         return [...prev, value];
  //     });
  //     inputRef.current.value = "";
  // }

  // render(){
  return (
    <div>
      <form>
        <div className="radioButtons">
        <h3>Pick a category to search: </h3>
        <label htmlFor="radio1">
          Title: <input 
            type="radio" 
            name="radioSearch" 
            id="radio1"
            value="title"
            ></input>
        </label>
        <label htmlFor="radio2">
          Year Released: <input 
            type="radio" 
            name="radioSearch" 
            id="radio2" 
            value="year"
            ></input>
        </label>
        <label htmlFor="radio2">
          Director: <input 
            type="radio" 
            name="radioSearch" 
            id="radio3"
            value="director"
            ></input>
        </label>
        <label htmlFor="radio3">
          Actors: <input 
            type="radio" 
            name="radioSearch" 
            id="radio4"
            value="actors"
            ></input>
        </label>
        <label htmlFor="radio4">
          Date Added<input 
            type="radio" 
            name="radioSearch"
            id="radio5"
            value="dateAdded"
            ></input>
        </label>
        </div>
        <div className="searchBar">
        <br />
        <label htmlFor="search">Search: </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter Search Term"
          autoComplete="Off"
          value={query}
          data-search
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        </div>
      </form>
    </div>
  );
  // }
}

export default SearchBar;
