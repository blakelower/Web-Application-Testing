import React from "react";

function dashboard(props) {
  const { strikeScore, ballScore, foulScore, hitScore } = props.play;
  console.log(props);
  return (
    <div>
      <button onClick={strikeScore}>STRIKE</button>
      <button onClick={ballScore}>BALL</button>
      <button onClick={foulScore}>FOUL</button>
      <button onClick={hitScore}>HIT</button>
    </div>
  );
}

export default dashboard;
