import React from "react";
import { Clock } from "../components/clock.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//easiest way to call props is to name the variable that your'e passing to the function
//npm = node package manager
//nvm = node version manager
const Home = (props) => {
  return (
    <div className="counter">
      <Clock />
      <div className="digit">{props.six}</div>
      <div className="digit">{props.five}</div>
      <div className="digit">{props.four}</div>
      <div className="digit">{props.three}</div>
      <div className="digit">{props.two}</div>
      <div className="digit">{props.one}</div>
    </div>
  );
};

export default Home;
