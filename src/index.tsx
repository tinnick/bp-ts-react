/*
"use strict"

let el = document.createElement("div");
el.innerHTML = "hello actix from javascript.";
document.body.appendChild(el);
*/

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/test";

ReactDOM.render(
	<Hello compiler="typescript" framework="React" />,
	document.getElementById("root")
);
