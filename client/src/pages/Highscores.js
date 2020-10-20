import React, { useEffect, useState } from "react";
import { List, ListItem } from "../components/Buttons/List/index";
import API from "../utils/API";

function Highscores() {
  const [highscores, setHighscores] = useState([]);
  useEffect(() => {
    loadHighscores();
  }, []);
  function loadHighscores() {
    API.getScores()
      .then((res) => setHighscores(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>
        {" "}
        Here's a list of all the highscores and the players who earned them!{" "}
      </h1>
      <List>
        {highscores.map((scores) => {
          return (
            <ListItem ket={scores._id}>
              <a href={"/highscores/" + scores._id}>
                {highscores.username} {highscores.scores}
              </a>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default Highscores;
