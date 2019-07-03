import {Component} from "@angular/core";
import {storage_url} from "../../node_modules/urls";

@Component({
    templateUrl: require("./app.component.html"),
    selector: "#app"
})
export class AppComponent {
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
