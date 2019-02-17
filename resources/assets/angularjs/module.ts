import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";

export const module = angular.module($appName, [
    uiRouter,
    ngMaterial
]);

module.run([
    "$rootScope",
    "$timeout",
    ($rootScope, $timeout) => {
        $rootScope.showPreloader = true;
        $timeout(() => {
            $rootScope.showPreloader = false;
        }, 2000)
    }
])

export default module;
