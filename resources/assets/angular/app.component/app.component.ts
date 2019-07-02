import {Component} from "@angular/core";
import {storage_url} from "../../node_modules/urls";

@Component({
    templateUrl: require("./app.component.html"),
    selector: "#app"
})
export class AppComponent {
    logos = [
        {
            url: storage_url("angular.svg")
        }, {
            url: storage_url("react-logo.svg"),
            href: env.APP_URL + "/react"
        }, {
            url: storage_url("vue-logo.svg")
        }
    ]
}
