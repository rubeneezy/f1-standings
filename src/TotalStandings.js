// src/TotalStandings.js

import React from "react";

const TotalStandings = ({ standings }) => (
  <div>
    <h2>Total Standings</h2>
    {standings.map((standing, index) => (
      <div key={index}>
        {standing.name}: {standing.points} points
      </div>
    ))}
  </div>
);

export default TotalStandings;
