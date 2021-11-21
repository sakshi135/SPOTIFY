import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input Placeholder="search for Artists,songs or episodes" type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="ST" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
