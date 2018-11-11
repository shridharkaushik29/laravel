import module from "../module";
import angular, {IScope} from "angular";
import {storage_url} from "../urls";
import {StateProvider} from "angular-ui-router";

module

    .config([
        '$stateProvider',
        ($stateProvider: StateProvider) => {

            $stateProvider

                .state("home", {
                    url: "/",
                    templateUrl: require("./home.template.html"),
                    resolve: {
                        logo_url: () => storage_url("angular_laravel.jpg")
                    },
                    controllerAs: "ctrl",
                    controller: class {

                        logos = [
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
                })
        }
    ]);