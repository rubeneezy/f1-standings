// src/RaceResults.js

import React from "react";

const RaceResults = ({ results }) => (
  <div>
    <h2>Points per Race</h2>
    {results.map((result, index) => (
      <div key={index}>
        {result.name}: {result.race} - {result.points} points
      </div>
    ))}
  </div>
);

export default RaceResults;
