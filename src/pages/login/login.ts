import { Helper } from './../../Core/services/helper.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pin: any;


  constructor(public navCtrl: NavController,
    public helper: Helper,
    public navParams: NavParams) {
  }

  loginUser() {
    if (this.pin.length == 0) {
      this.helper.presentToast("PIN can not be empty");
      return;
    } else if (this.pin.length != 4) {
      this.helper.presentToast("Please enter valid PIN and try again");
      return;
    } else if (this.pin != localStorage.getItem("U-PIN")) {
      this.helper.presentToast("Invalid Credentails.");
      return;
    }
    else {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInAt", new Date().toISOString());
      this.navCtrl.setRoot("HomePage");
    }

  }

  signUpUser() {
    this.navCtrl.setRoot("SignupPage");
  }

  forgetPassword() {
    this.navCtrl.push("ResetPasswordPage");
  }

}
