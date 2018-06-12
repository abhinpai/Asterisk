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

  loginUser(){
    if (this.pin === localStorage.getItem("U-PIN")){
      localStorage.setItem("isLoggedIn", "true");
      this.navCtrl.setRoot("HomePage");
    }
    else{
      this.helper.presentToast("Invalid Credentails.");
    }
   
  }

  signUpUser(){
    this.navCtrl.setRoot("SignupPage");
  }

  forgetPassword(){
    this.navCtrl.push("ResetPasswordPage");
  }

}
