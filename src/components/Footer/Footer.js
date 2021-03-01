/*
 *
 * Title: Simple Footer
 * Description: Simple Footer
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">
        Made with{" "}
        <span>
          <FontAwesomeIcon icon={faHeartbeat} />
        </span>{" "}
        by
        <a href="http://github.com/shaharafat" target="_blank" rel="noreferrer">
          Shah Arafat
        </a>
      </h3>
    </div>
  );
};

export default Footer;
