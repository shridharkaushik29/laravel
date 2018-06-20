angular.module($appName, [
    'ui.router'
])

        .config([
            '$stateProvider',
            '$locationProvider',
            ($stateProvider, $locationProvider) => {

                $locationProvider.html5Mode(true)

                $stateProvider

                        .state("home", {
                            url: "/",
                            templateUrl: getTemplateUrl("welcome")
                        })
            }
        ])