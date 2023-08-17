// Unit.jsx
import React, { useState } from 'react';

function Unit() {
  const [isParked, setIsParked] = useState(false);

  return (
    <div 
      className="border w-24 h-16 m-2 relative cursor-pointer" 
      onClick={() => setIsParked(!isParked)}
    >
      {isParked && (
        <div className="bg-gray-500 w-16 h-8 absolute top-1/4 left-1/4"></div>
      )}
    </div>
  );
}

export default Unit;
