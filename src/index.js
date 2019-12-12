import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "2rem",
  border: "1px solid black"
};

const randomNumber = Math.floor(Math.random() * 10);

if (randomNumber > 5) {
  customStyle.color = "blue";
} else {
  customStyle.color = "cyan";
}

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
