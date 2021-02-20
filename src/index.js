import _ from "lodash";

import "./styles/style.css";
import "./styles/style.scss";
import Icon from "./assets/images/icon.jpeg";

function component({ name, className }) {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", name], " ");
  element.classList.add(className);

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(
  component({ name: "webpack", className: "hello-webpack" })
);
document.body.appendChild(component({ name: "sass", className: "hello-sass" }));
