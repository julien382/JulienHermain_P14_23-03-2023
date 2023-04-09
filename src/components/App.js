import React from "react";
import { Routes, Route } from "react-router-dom";

import '../styles/reset.css';
import '../styles/index.css';

import Header from "./Header/Header";
import CreateEmployee from '../pages/CreateEmployee/CreateEmployee';
import CurrentEmployees from "../pages/CurrentEmployees/CurrentEmployees";
import Error from "../pages/Error/Error";

function App() {

  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<CreateEmployee />}></Route>
        <Route path="/employees" element={<CurrentEmployees />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>

    </div>
  );
}

export default App;
