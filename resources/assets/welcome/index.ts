import angular from "angular";
import module from "./module";
import "./home";

document.querySelector("body").innerHTML = require("./body.html");

angular.bootstrap(document.querySelector("body"), [module.name])