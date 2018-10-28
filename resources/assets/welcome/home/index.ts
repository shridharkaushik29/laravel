import module from "../module";
import angular from "angular";
import {storage_url} from "../urls";

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
                    }
                })
        }
    ]);