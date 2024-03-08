// src/TotalStandings.js

import React from "react";

const TotalStandings = ({ standings }) => (
  <div>
    <h2>Total Standings</h2>
    {standings.map((standing, index) => (
      <div key={index}>
        P{index + 1}:  {standing.name} with {standing.points} points
      </div>
    ))}
  </div>
);

export default TotalStandings;
