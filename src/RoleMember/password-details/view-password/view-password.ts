import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-password',
  templateUrl: 'view-password.html',
})
export class ViewPasswordPage {

  isShowPass: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showPassword(){
    this.isShowPass ? this.isShowPass = false : this.isShowPass = true;
  }

}
