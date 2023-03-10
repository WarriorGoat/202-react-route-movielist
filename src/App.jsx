// import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const App = () => {
  
return (
  <div className="App-header">
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);
}

export default App;
