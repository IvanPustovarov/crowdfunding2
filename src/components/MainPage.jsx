import React from "react";
import "../css/mainPage.css";
import Card from "./Cards";
import Mentors from "./Mentors";

const MainPage = () => {
  return (
    <div className="wrapper">
      <div className="header">header</div>
      <div className="content">
        <ul className="menu">
          <li>Все</li>
          <li>IT</li>
          <li>Здоровье</li>
          <li>Права</li>
        </ul>
        <Card />
        <Mentors />
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default MainPage;
