//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./pages/home.jsx";
let counter = 0;

//render your react application
setInterval(() => {
    const six = counter/100000
    const five = counter/10000
    const four = counter/1000
    const three = counter/100
    const two = counter/10
    const one = counter/1
  ReactDOM.render(
    <Home one={one} two={two} three={three} four={four} five={five} six={six} />,
    document.querySelector("#app")
  );
  counter++
}, 1000);
