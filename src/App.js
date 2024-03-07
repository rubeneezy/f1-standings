// src/App.js

import React from "react";
import "./App.css";
import RaceResults from "./RaceResults";
import TotalStandings from "./TotalStandings";
import Header from "./Header";

function App() {
  const raceResults = [
    { name: "Fern(ando)", race: "Bahrain", points: 25 },
    { name: "Katie", race: "Bahrain", points: 55 },
    { name: "carmen", race: "Bahrain", points: 43 },
    { name: "RUENDY", race: "Bahrain", points: 43 },
    { name: "Ruben", race: "Bahrain", points: 51 },
    { name: "Luiis", race: "Bahrain", points: 43 },
    { name: "Alex Ramirez", race: "Bahrain", points: 37 },
  ];

  const totalStandings = [
    { name: "Katie", points: 55 },
    { name: "Ruben", points: 51 },
    { name: "carmen", points: 43 },
    { name: "RUENDY", points: 43 },
    { name: "Luiis", points: 43 },
    { name: "Alex Ramirez", points: 37 },
    { name: "Fern(ando)", points: 25 },
  ];

  return (
    <div className="App">
      <Header /> {/* Add the Header component here */}
      <RaceResults results={raceResults} />
      <TotalStandings standings={totalStandings} />
    </div>
  );
}

export default App;
