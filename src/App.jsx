//Import React Components
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Import CSS file for this page
import "./App.css";

// Import Route info
import MovieLayout from "./Layouts/MovieLayout";
import NavLayout from "./Layouts/NavLayout";
import MovieFormPage from "./Pages/MovieFormPage";
import MovieListPage from "./Pages/MovieListPage";
import MoviePage from "./Pages/MoviePage";
import HomePage from "./Pages/HomePage";

//Import Data Set
import movies from "./Data/movies";

const App = () => {
  //Set state of data set
  const [movieList, setMovieList] = useState(movies);

  //create function to handle adding a movie title
  const handleAddMovie = (title) => {
    const newMovie = {
      Title: title,
    };
    setMovieList([...movieList, newMovie]);
  };

  //Stucture Router to define pages and children
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: "/movies",
          element: <MovieLayout data={movieList} />,
          children: [
            {
              element: <MovieListPage data={movieList} />,
              index: true,
            },
            {
              element: <MovieFormPage handleAddMovie={handleAddMovie} />,
              path: "/movies/movieform",
            },
            {
              element: <MoviePage data={movieList} />,
              path: ":index",
            },
          ],
        },
      ],
    },
  ]);

  //Return the page routing
  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
