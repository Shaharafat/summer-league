/*
 *
 * Title: Players card container
 * Description: this component contains all players list with details
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */

import React, { useEffect, useState } from "react";
// player data
import playersData from "../../players-data/players";
// import components
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]); // state that stores players
  const [isSold, setIsSold] = useState(false); // state that stores players status
  const buyPlayer = () => {
    console.log("done");
    setIsSold(true);
  };
  useEffect(() => {
    setPlayers(playersData);
  }, []);

  return (
    <div className="players">
      {players.map((player) => (
        <SinglePlayer
          player={player}
          buyPlayer={buyPlayer}
          isSold={isSold}
          key={player.id}
        />
      ))}
    </div>
  );
};

export default Players;
