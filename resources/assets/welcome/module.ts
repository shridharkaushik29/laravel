import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";

export const module = angular.module($appName, [
    uiRouter,
    ngMaterial
]);

export default module;