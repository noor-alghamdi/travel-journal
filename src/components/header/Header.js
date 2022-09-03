import React from "react";
import "../header/header.css";
import ExploreIcon from "@mui/icons-material/Explore";

function Header() {
  return (
    <div>
      <nav className="nav--bar">
        <ul className="nav--items">
          <li></li>
          <li>
            <p className="title">
              <ExploreIcon fontSize="medium" /> TRAVEL WITH ME
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
