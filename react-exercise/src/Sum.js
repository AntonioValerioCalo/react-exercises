import React from "react";

export function Sum({number}) {
  const result = number.reduce((numbers, a) => numbers + a, 0);
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}

Sum.defaultProps={
    number:[1,2,3,4],
}