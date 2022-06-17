import React from "react";
import round1 from "./images/Ellipse 4.svg";
import round2 from "./images/Ellipse 6.svg";
import round3 from "./images/Ellipse 8.svg";
import line1 from "./images/Line 8.svg";
import line2 from "./images/Line 10.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="appp">
      <img src={round1} alt="" className="round1" />

      <img src={round2} alt="" className="round2" />

      <img src={round3} alt="" className="round3" />
      <img src={line1} alt="" className="line1" />
	  <img src={line2} alt="" className="line2" />
    </div>
  );
}

export default Sidebar;
