import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./Page/LandingPage";

import "./assets/scss/style.scss";

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load("particles-js", "json/particles.js", function () {
//   console.log("callback - particles-js config loaded");
// });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
