// Grid.jsx
import React from 'react';
import Unit from './Unit';

function Grid({ numUnits = 20 }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array(numUnits).fill(null).map((_, index) => (
        <Unit key={index} />
      ))}
    </div>
  );
}

export default Grid;
