// import Header from "../Components/Header";

//Table React Component
import { useState } from "react";
import "./Table.css";
import movies from "../Data/movies";
import Header from "../Components/Header"




// create two simple function components to make our table code more readable

//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
        {/* <th>Director</th>
        <th>IMDB Rating</th>
        <th>Plot</th>
        <th>Actors</th>
        <th>Date Added</th>
        <th>Delete</th> */}
      </tr>
    </thead>
  );
};

//TABLE BODY SIMPLE COMPONENT
const TableBody = (props) => {
  //construct rows
  // use map to iterate over each row and wrap it in a html table row
  //register an on click listener to remove
  const rows = props.data.map((row, index) => {
    return (
      <tr key={index}>
        <td> {row.year} </td>
        <td>{row.title}</td>
        {/* <td>{row.director}</td>
        <td> {row.imdbRating} </td>
        <td>{row.plot}</td>
        <td>{row.actors}</td>
        <td> {row.dateAdded}</td> */}
        <td className="detailsButton">
          <button onClick={() => props.removeMovie(index)}> Details</button>
        </td>
        {/* <td className="deleteButton">
          <button onClick={() => props.removeMovie(index)}> Delete</button>
        </td> */}
      </tr>
    );
  });
  //return rows wrapped in tbody
  return <tbody>{rows}</tbody>;
};
// TABLE is our main Component
const Table=() => {
  //Import movie data and assign to movieList
  const [movieList, setMovieList] = useState (movies)
  
  
  const removeMovie = (index) => {
    // const { movieList } = this.state;
    // now that we've defined this.state, we can use setState to update the state
    setMovieList({
      // remove movie at passed in index by returning a new list excluding that character
      movieList: movieList.filter((_, i) => {
        return i !== index;
      }),
    });
  };

//   render() {
    //read props passed in from App.js
    // const { movieData, removeMovie } = this.props;

    return (
      <div>
        <Header />
        <table>
          <TableHeader />
          <TableBody 
          data={movieList} 
          removeMovie={removeMovie} 
          />
        </table>
      </div>
    );
  }
// }

export default Table;
