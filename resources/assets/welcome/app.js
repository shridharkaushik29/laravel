import angular from "angular";
import uiRouter from "angular-ui-router";
import "./style.less";

angular.module($appName, [
    uiRouter
])

        .config([
            '$stateProvider',
            '$locationProvider',
            ($stateProvider, $locationProvider) => {

                $locationProvider.html5Mode(true)

                $stateProvider

                        .state("home", {
                            url: "/",
                            title: "Welcome",
                            templateUrl: getTemplateUrl("welcome")
                        })
            }
        ]);