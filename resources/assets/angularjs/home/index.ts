import module from "../module";
import {storage_url} from "urls";
import {StateProvider} from "angular-ui-router";

module

    .config([
        '$stateProvider',
        ($stateProvider: StateProvider) => {

            $stateProvider

                .state("home", {
                    url: "/",
                    templateUrl: require("./home.template.html"),
                    controllerAs: "ctrl",
                    controller: class {

                        logos = [
                            {
                                title: "AngularJS",
                                url: storage_url("angularjs-logo.svg"),
                                href: env.APP_URL
                            }, {
                                title: "React",
                                url: storage_url("react-logo.svg"),
                                href: env.APP_URL + "/react"
                            }, {
                                title: "Angular",
                                url: storage_url("angular-logo.png"),
                                href: env.APP_URL + "/angular"
                            }
                        ]

                    }
                })
        }
    ]);
