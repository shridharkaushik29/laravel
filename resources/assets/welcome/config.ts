import module from "./module";
import {StateProvider, UrlRouterProvider} from "angular-ui-router";


module.config([
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {

        $urlRouterProvider.otherwise("/");

    }
])