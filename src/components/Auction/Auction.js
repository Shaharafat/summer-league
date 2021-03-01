/*
 *
 * Title: Auction
 * Description: This component contains auction relatd functionalities
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
// dependencies
import React, { useEffect, useState } from "react";
// Compoenents
import Players from "../../components/Players/Players";
import Team from "../../components/Team/Team";
import playersData from "../../players-data/players"; // player data
import "./Auction.css";

const Auction = () => {
  const [players, setPlayers] = useState([]); // state that stores players
  const [selectedPlayers, setSelectedPlayers] = useState([]); // state that stores selected playersData

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  // update isSold property to true when a player is purchased
  const buyPlayer = (id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, isSold: true } : player
    );
    // updated players list
    setPlayers(updatedPlayers);
    // update selected players
    const player = players.find((player) => player.id === id);
    setSelectedPlayers((existingPlayers) => [...existingPlayers, player]);
  };

  return (
    <div className="auction">
      <Team selectedPlayers={selectedPlayers} />
      <Players players={players} buyPlayer={buyPlayer} />
    </div>
  );
};

// export
export default Auction;
