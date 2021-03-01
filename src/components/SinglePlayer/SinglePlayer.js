/*
 *
 * Title: Single Player card
 * Description: This component organizes single player details in a card.
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
// dependencies
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({
  player: { id, name, thumbnail, country, position, flag, price, isSold },
  buyPlayer,
}) => {
  return (
    <div className="player d-flex flex-column shadow-sm rounded-1">
      <div className="d-flex justify-content-between align-items-center">
        <img
          className="player-image rounded-circle"
          src={thumbnail}
          alt={name}
        />
        <img src={flag} alt="flag" className="player-flag rounded-2" />
      </div>
      <h3 className="player-name fs-5 text-uppercase fw-bold mt-3">{name}</h3>
      <div className="d-flex justify-content-between mt-2">
        <div>
          <h5 className="player-country">Country: {country}</h5>
          <h5 className="player-position">Position: {position}</h5>
        </div>
        <h2 className="player-price fs-5">
          <FontAwesomeIcon icon={faMoneyBillAlt} /> ${price}
        </h2>
      </div>
      <button
        onClick={() => buyPlayer(id)}
        className="player-button btn text-uppercase fw-bold mt-auto"
        disabled={isSold}
      >
        {isSold ? "SOLD" : "Buy player"}
      </button>
    </div>
  );
};

// export
export default SinglePlayer;
