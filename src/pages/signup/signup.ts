import { Helper } from './../../Core/services/helper.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  sigupData = {
    pin: null,
    cpin: null,
    phone: ''
  }

  constructor(public navCtrl: NavController,
    public helper:Helper,
    public navParams: NavParams) {
  }

  signUpUser() {

    console.log(this.sigupData);

    if (this.sigupData.pin === this.sigupData.cpin) {
      localStorage.setItem("U-PIN", this.sigupData.pin);
      localStorage.setItem("U-Phone", this.sigupData.phone);
      localStorage.setItem("isLoggedIn", "true");
      this.navCtrl.setRoot("HomePage");
      this.helper.presentToast("Welcome to Asterisk, keep your credentials always with you and access is anywhere");
    }else{
      this.helper.presentToast("Please enter same PIN and try again!");
    }
    
  }

  loginUser() {
    this.navCtrl.setRoot("LoginPage");
  }

}
