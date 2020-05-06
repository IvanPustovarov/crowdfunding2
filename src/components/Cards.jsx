import React from "react";
import "../css/cards.css";
import ProjectCard from "./ProjectCard";
import { card } from "../store/card";

const onCardClick = () => {};

const Cards = () => {
  return (
    <>
      <div onClick={onCardClick} className="card card-1">
        <ProjectCard card={card[0]} />
      </div>
      <div className="card card-2">
        <ProjectCard card={card[1]} />
      </div>
      <div className="card card-3">
        <ProjectCard card={card[2]} />
      </div>
      <div className="card card-4">
        <ProjectCard card={card[3]} />
      </div>
    </>
  );
};

export default Cards;
