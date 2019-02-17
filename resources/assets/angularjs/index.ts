import angular from "angular";
import module from "./module";
import "./config";
import "./home";

document.querySelector("#app").innerHTML = require("./body.html");

angular.bootstrap(document.querySelector("html"), [module.name])
