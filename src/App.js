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
    { name: "Carmen", race: "Bahrain", points: 43 },
    { name: "RUENDY", race: "Bahrain", points: 43 },
    { name: "Ruben", race: "Bahrain", points: 51 },
    { name: "Luiis", race: "Bahrain", points: 43 },
    { name: "Alex Ramirez", race: "Bahrain", points: 37 },
    { name: "Katie", race: "Saudi Arabia", points: 58 },
    { name: "Carmen", race: "Saudi Arabia", points: 62 },
    { name: "RUENDY", race: "Saudi Arabia", points: 25 },
    { name: "Ruben", race: "Saudi Arabia", points: 66 },
    { name: "Luiis", race: "Saudi Arabia", points: 25 },
    { name: "Alex Ramirez", race: "Saudi Arabia", points: 66 }
];


  const totalStandings = [
    { name: "Katie", points: 113 },
    { name: "Ruben", points: 118 },
    { name: "Carmen", points: 106 },
    { name: "RUENDY", points: 68 },
    { name: "Luiis", points: 68 },
    { name: "Alex Ramirez", points: 104 },
    { name: "Fern(ando)", points: 25 },
  ];

  return (
    <div className="App">
      <Header /> 
      <TotalStandings standings={totalStandings.sort((a, b) => a.points > b.points)} />
      <RaceResults results={raceResults} />
    </div>
  );
}

export default App;
