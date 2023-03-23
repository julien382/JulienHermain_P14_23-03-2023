import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';


//import '../styles/reset.css';
import '../styles/index.css';

function App() {

  return (
    <div id="app">
      <Routes>
        {/*<Route path="/employees" element={<CurrentEmployees />}></Route>*/}
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
