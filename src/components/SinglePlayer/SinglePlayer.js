/*
 *
 * Title: Single Player card
 * Description: This component organizes single player details in a card.
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, buyPlayer, isSold }) => {
  return (
    <div className="player d-flex flex-column shadow-sm rounded-1">
      <div className="d-flex justify-content-between align-items-center">
        <img
          className="player-image rounded-circle"
          src={player.thumbnail}
          alt={player.name}
        />
        <img src={player.flag} alt="flag" className="player-flag rounded-2" />
      </div>
      <h3 className="player-name fs-5 text-uppercase fw-bold mt-3">
        {player.name}
      </h3>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <div>
          <h5 className="player-country">Country: {player.country}</h5>
          <h5 className="player-position">Position: {player.position}</h5>
        </div>
        <h2 className="player-price fs-4">${player.price}</h2>
      </div>
      <button
        onClick={buyPlayer}
        className="player-button btn text-uppercase fw-bold mt-4"
        disabled={isSold}
      >
        {isSold ? "SOLD" : "Buy player"}
      </button>
    </div>
  );
};

export default SinglePlayer;
