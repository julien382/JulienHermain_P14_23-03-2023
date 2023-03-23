import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateEmployee from '../pages/CreateEmployee/CreateEmployee';
import CurrentEmployees from "../pages/CurrentEmployees/CurrentEmployees";

//import '../styles/reset.css';
import '../styles/index.css';

function App() {

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<CreateEmployee />}></Route>
        <Route path="/employees" element={<CurrentEmployees />}></Route>
      </Routes>

    </div>
  );
}

export default App;
