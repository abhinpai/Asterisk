import { PasswordDBServiceProvider } from './../services/password-db.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Helper } from '../../../Core/services/helper.service';


@IonicPage()
@Component({
  selector: 'page-edit-password',
  templateUrl: 'edit-password.html',
})
export class EditPasswordPage {

  passwordData: any;
  // provider_logos: any;

  constructor(public navCtrl: NavController, 
    public http: HttpClient,
    public helper: Helper,
    public passDBService: PasswordDBServiceProvider,
    public navParams: NavParams) {

      this.passwordData = this.navParams.data;
  }

  // ionViewWillEnter() {

  //   this.http.get('assets/logos.json')
  //     .subscribe(res => {
  //       this.provider_logos = res;
  //     });

  // }

  // resetLogo() {
  //   this.passwordData.logo = localStorage.getItem('ErrorPhoto');
  //   this.passwordData.logo_id = 0;
  // }

  // setLogo(ev: any) {
  //   this.resetLogo();
  //   const val = ev.value;

  //   for (let i = 0; i < this.provider_logos.length; i++) {
  //     if (this.provider_logos[i].name.toLowerCase() == val.toLowerCase() || this.provider_logos[i].subname.toLowerCase() == val.toLowerCase()) {
  //       this.passwordData.logo = this.provider_logos[i].path;
  //       this.passwordData.logo_id = this.provider_logos[i].id;
  //     }
  //   }
  // }

  updatePasswordDetails(){
    if (this.passwordData.provider.length == 0) {
      this.helper.presentToast("Please enter Provider Name");
      return;
    }

    if (this.passwordData.username.length == 0) {
      this.helper.presentToast("Please enter Username");
      return;
    }

    if (this.passwordData.username.length > 30) {
      this.helper.presentToast("The Username length can't excede more than 15 character");
      return;
    }

    if (this.passwordData.email.length == 0) {
      this.helper.presentToast("Please enter email address");
      return;
    }

    if (!this.validateEmail(this.passwordData.email)) {
      this.helper.presentToast("Please enter valid email address");
      return;
    }

    if (this.passwordData.password.length == 0) {
      this.helper.presentToast("Please enter Password");
      return;
    }

    if (this.passwordData.password.length > 30) {
      this.helper.presentToast("The password length can't excede more than 15 character");
      return;
    }

    this.passwordData.updated_at = new Date().toISOString();
    this.passDBService.updatePassword(this.passwordData)
    .then(res =>{
      this.helper.presentToast("Password successfully updated");
      this.navCtrl.pop();
    }).catch(e => console.log(e));
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
