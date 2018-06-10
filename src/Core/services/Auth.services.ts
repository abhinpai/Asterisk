
import { App } from "ionic-angular";
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceProvider {

    constructor(public app: App){}

    shutDownUser(){
        localStorage.clear();
        this.app.getRootNav().setRoot("LoginPage");
    }
}