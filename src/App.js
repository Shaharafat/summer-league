// player data
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import Team from "./components/Team/Team";
import playersData from "./players-data/players";

function App() {
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
    setSelectedPlayers((existingPlayers) =>
      [...existingPlayers, player]
    );
  };

  return (
    <div className="app container">
      <Header />
      <Team selectedPlayers={selectedPlayers} />
      <Players players={players} buyPlayer={buyPlayer} />
    </div>
  );
}

export default App;
