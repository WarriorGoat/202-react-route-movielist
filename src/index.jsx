import React from "react";
// import { Component } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./Pages/HomePage";
import MovieListPage from "./Pages/MovieListPage";
import MoviePage from "./Pages/MoviePage";
import movies from ".//Data/movies";



// class Index extends Component {
//   state = { movieList: movies }; // set initial state of component

//   // // create simple method here to remove a movie from the index
//   removeMovie = (index) => {
//     
//     // now that we've defined this.state, we can use setState to update the state
//     this.setState({
//       // remove movie at passed in index by returning a new list excluding that character
//       movieList: movieList.filter((_, i) => {
//         return i !== index;
//       }),
//     });
//   };

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/movielist",
          element: <MovieListPage 
          // movieData = {this.state.movieList}
          // removeMovie = {this.removeMovie}
          />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
// }