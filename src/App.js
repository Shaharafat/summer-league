/*
 *
 * Title: Application component
 * Description: This component works as root component.
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */
// dependencies
import React from "react";
import "./App.css";

// Compoenents
import Auction from "./components/Auction/Auction";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app container">
      <Header />
      <Auction />
      <Footer />
    </div>
  );
}

// export
export default App;
