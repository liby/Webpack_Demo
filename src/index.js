import _ from "lodash";

import "./styles/style.css";
import "./styles/style.scss";
import Icon from "./assets/images/icon.jpeg";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const cssDiv = document.createElement("div");
  const scssDiv = document.createElement("div");

  const myIcon = new Image();

  cssDiv.innerHTML = _.join(["Hello", "webpack"], " ");
  cssDiv.classList.add("hello-webpack");
  scssDiv.innerHTML = _.join(["Hello", "sass"], " ");
  scssDiv.classList.add("hello-sass");

  myIcon.src = Icon;

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(cssDiv);
  element.appendChild(scssDiv);
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
