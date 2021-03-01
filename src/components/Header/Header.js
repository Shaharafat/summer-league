import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className="header w-100 px-3 py-2 d-flex flex-column align-items-center justify-content-center">
      <h1 className="site-name fs-3">Summer Premiere League</h1>
      <h3 className="site-subtitle fs-4">Auction</h3>
    </div>
  )
}

export default Header;
