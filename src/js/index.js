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
  const six = Math.floor(counter / 100000) % 10;
  const five = Math.floor(counter / 10000) % 10;
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;
  ReactDOM.render(
    <Home
      one={one}
      two={two}
      three={three}
      four={four}
      five={five}
      six={six}
    />,
    document.querySelector("#app")
  );
  counter++;
}, 1000);
