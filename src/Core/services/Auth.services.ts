
import { App } from "ionic-angular";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceProvider {

    constructor(public app: App){}

    shutDownUser(){
        localStorage.removeItem("isLoggedIn");
        this.app.getRootNav().setRoot("LoginPage");
    }
}