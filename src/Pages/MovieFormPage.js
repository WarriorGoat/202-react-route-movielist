import React from "react";
import MovieForm from "../Components/MovieForm";

const MovieFormPage = (props) => {
    const handleAddMovie=props
  return (
    <div>
      <p className="instructions">
        Enter the details to add a new movie to the list.
      </p>
      <MovieForm 
      handleAddMovie={handleAddMovie}
      />
    </div>
  );
};

export default MovieFormPage