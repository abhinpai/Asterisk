import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../Core/services/Auth.services';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
    public authService: AuthServiceProvider, 
    public navParams: NavParams) {
  }

  signout(){
    this.authService.shutDownUser();
  }
}
