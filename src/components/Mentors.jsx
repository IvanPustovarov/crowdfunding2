import React from "react";
import { people } from "../store/card";
import "../css/mentors.css";
import Profile from "./Profile";

const Mentors = () => {
  return (
    <div className="mentors">
      <Profile people={people[0]} />
      <Profile people={people[1]} />
      <Profile people={people[2]} />
      <br />
      <button>more</button>
    </div>
  );
};

export default Mentors;
