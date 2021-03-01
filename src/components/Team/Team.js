/*
 *
 * Title: Team Members
 * Description: This component represent team members list brought on auction
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
import React from "react";
import logo from "../../assets/images/logo.png"; // team logo
import TeamMember from "../TeamMember/TeamMember";
import "./Team.css";

const Team = ({ selectedPlayers }) => {
  return (
    <div className="team d-flex flex-column align-items-center">
      <img className="team-logo" src={logo} alt="pitch smashers" />
      <h4 className="team-member-count mt-3 fs-4">Total {selectedPlayers.length > 1 ? "Member's:" : "Member:"} {selectedPlayers.length}</h4>
      {selectedPlayers.map((selectedPlayer) => (
        <TeamMember player={selectedPlayer} key={selectedPlayer.id} />
      ))}
    </div>
  );
};

export default Team;
