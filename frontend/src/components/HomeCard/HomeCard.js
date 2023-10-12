import React from "react";
import "./HomeCard.scss";

function HomeCard({ onClick, title, description, src }) {
  return (
    <div class="outTeam__card transparent" onClick={onClick}>
      <img class="outTeam__cardImg" src={src} alt="" srcset="" />
      <div class="outTeam__cardName">{title}</div>
      <div class="outTeam__cardTitle">{description}</div>
    </div>
  );
}

export default HomeCard;
