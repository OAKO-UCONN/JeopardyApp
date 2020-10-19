import React, { useEffect, useState } from "react";

function ShowHighscores() {
  const [highscores, setHighscores] = useState([]);
  function loadHighscores() {
    API.getScores().then((res) => setHighscores(res.data));
  }
  useEffect(loadHighscores, []);
  console.log(highscores);
  return (
    <div>
      <h1>
        {" "}
        Here's a list of all the highscores and the players who earned them!{" "}
      </h1>
    </div>
  );
}

export default ShowHighscores;
