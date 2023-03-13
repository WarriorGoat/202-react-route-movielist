//Table React Component
import { Link } from "react-router-dom";
import "./Table.css";

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
const TableBody = (props) => {
  //construct rows
  // use map to iterate over each row and wrap it in a html table row
  //register a link to take the user to the movie details page

  const rows = props.data.data.map((row, index) => {
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
  return <tbody>{rows}</tbody>; //return rows wrapped in tbody
};

// TABLE is our main Component
const MovieListPage = (props) => {
  //Import movie data and assign to movieList

  return (
    <div>
      <p className="instructions">
        Click on the title to see the movie's details.
      </p>
      <table>
        <TableHeader />
        <TableBody data={props} />
      </table>
    </div>
  );
};

export default MovieListPage;
