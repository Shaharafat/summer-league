/*
 *
 * Title: Simple Footer
 * Description: Simple Footer
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
import React from 'react';
// icon
import { FaHeartbeat } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">
        Made with <span><FaHeartbeat /></span> by
        <a href="http://github.com/shaharafat" target="_blank" rel="noreferrer">Shah Arafat</a>
      </h3>
    </div>
  )
}

export default Footer;
