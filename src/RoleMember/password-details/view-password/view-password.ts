import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-password',
  templateUrl: 'view-password.html',
})
export class ViewPasswordPage {


  isShowPass: boolean = false;
  public passwordData = {
    logo: null,
    provider: null,
    username: null,
    email: null,
    password: null,
    description: null,
    url: null,
    created_at: null,
    updated_at: null,
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    let data = this.navParams.data;
    this.passwordData.logo = data.logo;
    this.passwordData.provider = data.provider;
    this.passwordData.username = data.username;
    this.passwordData.email = data.email;
    this.passwordData.password = data.password;
    this.passwordData.description = data.description;
    this.passwordData.url = data.url;
    this.passwordData.created_at = data.created_at;
    this.passwordData.updated_at = data.updated_at;
  }

  showPassword() {
    this.isShowPass ? this.isShowPass = false : this.isShowPass = true;
  }

}
