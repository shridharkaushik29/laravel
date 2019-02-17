import "script-loader!jquery";
import {render} from "react-dom";
import {AppComponent} from "./AppComponent";
import * as React from "react";

render(React.createElement(AppComponent), document.querySelector("#app"));
