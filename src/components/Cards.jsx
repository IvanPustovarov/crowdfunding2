import React from "react";
import "../css/mainPage.css";
import ProjectCard from "./ProjectCard";

const Cards = () => {
  return (
    <>
      <div className="card card-1">
        <ProjectCard />
      </div>
      <div className="card card-2">card</div>
      <div className="card card-3">card3</div>
      <div className="card card-4">card4</div>
    </>
  );
};

export default Cards;
