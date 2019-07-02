import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatCardModule} from "@angular/material";
import {AppComponent} from "./app.component/app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class AppModule {
    constructor() {
        document.querySelector(".pre-loader").remove();
    }
}
