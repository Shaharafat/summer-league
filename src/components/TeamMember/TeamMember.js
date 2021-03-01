/*
 *
 * Title: Single Team Member
 * Description: This component represents single team member information
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
// dependencies
import React from "react";
import "./TeamMember.css";

const TeamMember = ({ player: { avatar, name, position, price } }) => {
  return (
    <div className="my-2 w-100">
      <div className="team-member d-flex align-items-center  p-2 w-100 shadow-sm rounded-2">
        <img
          src={avatar}
          alt={name}
          className="team-member-image rounded-circle"
        />
        <div className="d-flex flex-column ms-2 justify-content-center ">
          <h2 className="team-member-name fw-bold text-uppercase">{name}</h2>
          <p className="team-member-position my-0">{position}</p>
        </div>
        <h2 className="team-member-price fw-bold ms-auto">${price}</h2>
      </div>
    </div>
  );
};
// export
export default TeamMember;
