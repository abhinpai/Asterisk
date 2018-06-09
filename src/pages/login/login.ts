
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginUser(){
    this.navCtrl.setRoot("HomePage");
  }

  signUpUser(){
    this.navCtrl.setRoot("SignupPage");
  }

  forgetPassword(){
    this.navCtrl.setRoot("ResetPasswordPage");
  }

}
