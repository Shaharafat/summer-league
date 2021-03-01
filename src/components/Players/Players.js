/*
 *
 * Title: Players card container
 * Description: this component contains all players list with details
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
// depencencies
import React from "react";
// import components
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = ({ players, buyPlayer }) => {
  return (
    <div className="players">
      {players.map((player) => (
        <SinglePlayer player={player} buyPlayer={buyPlayer} key={player.id} />
      ))}
    </div>
  );
};

// export
export default Players;
