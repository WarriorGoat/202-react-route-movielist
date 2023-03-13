//Table React Component
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import movies from "../Data/movies";

// create two simple function components to make our table code more readable

// TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
      </tr>
    </thead>
  );
};

//TABLE BODY SIMPLE COMPONENT
const TableBody = (prop) => {
  //construct rows
  // use map to iterate over each row and wrap it in a html table row
  //register a link to take the user to the movie details page

  const rows = prop.data.map((row, index) => {
    return (
      <>
        <tr key={index}>
          <td> {row.year} </td>
          <td>
            <Link to={`/movies/${index}`}>{row.title} </Link>
          </td>
        </tr>
      </>
    );
  });
  //return rows wrapped in tbody
  return <tbody>{rows}</tbody>;
};
// TABLE is our main Component
const MovieListPage = () => {
  //Import movie data and assign to movieList
  const [movieList, setMovieList] = useState(movies);

  return (
    <div>
      <p className="instructions">
        Click on the title to see the movie's details.
      </p>
      <table>
        <TableHeader />
        <TableBody 
        data={movieList} />
      </table>
    </div>
  );
};
// }

export default MovieListPage;
