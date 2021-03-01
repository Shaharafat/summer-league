/*
 *
 * Title: Team Members
 * Description: This component represent team members list brought on auction
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
// dependencies
import React from "react";
import logo from "../../assets/images/logo.png"; // team logo
import TeamMember from "../TeamMember/TeamMember";
import "./Team.css";

const Team = ({ selectedPlayers }) => {
  // calculate total price
  const totalPrice = selectedPlayers.reduce(
    (total, player) => (total += Number(player.price)),
    0
  );
  return (
    <div className="team d-flex flex-column px-2 align-items-center">
      <img className="team-logo" src={logo} alt="pitch smashers" />
      <h4 className="team-member-count mt-3 fs-4">
        Total {selectedPlayers.length > 1 ? "Member's:" : "Member:"}{" "}
        {selectedPlayers.length}
      </h4>
      <h4 className="mt-5 no-player" hidden={!!selectedPlayers.length}>No Player Selected</h4>
      {/* show all selected players */}
      {selectedPlayers.map((selectedPlayer) => (
        <TeamMember player={selectedPlayer} key={selectedPlayer.id} />
      ))}
      <div
        className="total-price-button btn w-100 fs-6"
        hidden={!selectedPlayers.length}
      >
        <div className="d-flex justify-content-between ">
          <span>Total Price: </span> <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

// export
export default Team;
