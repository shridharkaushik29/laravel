import module from "../module";
import angular, {IScope} from "angular";
import {storage_url} from "../urls";
import {Debugger} from "inspector";

module

    .config([
        '$stateProvider',
        '$locationProvider',
        ($stateProvider, $locationProvider) => {

            $locationProvider.html5Mode(true)

            $stateProvider

                .state("home", {
                    url: "/",
                    title: "Welcome",
                    templateUrl: require("./home.template.html"),
                    resolve: {
                        logo_url: () => storage_url("angular_laravel.jpg")
                    },
                    controller: [
                        '$scope',
                        ($scope: any) => {
                            $scope.logos = [
                                {
                                    url: storage_url("angular.svg")
                                }, {
                                    url: storage_url("react-logo.svg")
                                }, {
                                    url: storage_url("vue-logo.svg")
                                }, {
                                    url: storage_url("laravel-logo.png")
                                }
                            ]
                        }
                    ]
                })
        }
    ]);