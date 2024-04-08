import React from "react";
import "./App.css";
import BackgroundImage from "../src/assets/Background.png";
import HomePage from "./layouts/HomePage";

function App() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <HomePage />
      </div>
    </>
  );
}

export default App;
