import React from "react";
import "./Player.css";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar.js";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
