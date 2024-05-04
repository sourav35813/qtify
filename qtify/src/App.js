import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
    </div>
  );
}
