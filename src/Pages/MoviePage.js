//Import React Components
import { useParams } from "react-router-dom";

//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
        <th>Director</th>
        <th>IMDB Rating</th>
        <th>Plot</th>
        <th>Actors</th>
        <th>Date Added</th>
      </tr>
    </thead>
  );
};

//TABLE BODY SIMPLE COMPONENT
const TableBody = (props) => {
  console.log(props);

  const { index } = useParams();

  return (
    <tbody>
      <tr>
        <td>{props.data.data[index].year} </td>
        <td>{props.data.data[index].title}</td>
        <td>{props.data.data[index].director}</td>
        <td>{props.data.data[index].imdbRating} </td>
        <td>{props.data.data[index].plot}</td>
        <td>{props.data.data[index].actors}</td>
        <td>{props.data.data[index].dateAdded}</td>
      </tr>
    </tbody>
  );
};

// MoviePage is our main Component
const MoviePage = (props) => {
  return (
    <div>
      <table>
        <TableHeader />
        <TableBody data={props} />
      </table>
    </div>
  );
};

export default MoviePage;
