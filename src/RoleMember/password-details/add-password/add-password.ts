import { PasswordDBServiceProvider } from './../services/password-db.service';
import { Helper } from './../../../Core/services/helper.service';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-password',
  templateUrl: 'add-password.html',
})
export class AddPasswordPage {

  public passwordData = {
    provider: '',
    username: '',
    email: '',
    password: '',
    url: '',
    description: '',
    strength: '',
    logo_id: 0,
    logo: null,
    created_at: null,
    updated_at: null,
  };

  type = "password";
  visible: boolean = false;
  provider_logos: any;


  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public helper: Helper,
    public zone: NgZone, 
    public passDBService: PasswordDBServiceProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {

    this.passwordData.logo = localStorage.getItem('ErrorPhoto');

    this.http.get('assets/logos.json')
      .subscribe(res => {
        this.provider_logos = res;
      });

  }

  resetLogo() {
    this.passwordData.logo = localStorage.getItem('ErrorPhoto');
    this.passwordData.logo_id = 0;
  }

  showPin() {
    if (this.visible) {
      this.visible = false;
      this.type = "password"
    } else {
      this.visible = true;
      this.type = "text"
    }
  }


  setLogo(ev: any) {
    this.resetLogo();
    const val = ev.value;

    for (let i = 0; i < this.provider_logos.length; i++) {
      if (this.provider_logos[i].name.toLowerCase() == val.toLowerCase() || this.provider_logos[i].subname.toLowerCase() == val.toLowerCase()) {
        this.passwordData.logo = this.provider_logos[i].path;
        this.passwordData.logo_id = this.provider_logos[i].id;
      }
    }
  }

  addNewPassword() {

    this.passwordData.created_at = new Date().toISOString();
    this.passwordData.updated_at = new Date().toISOString();

    if(this.passwordData.provider.length == 0){
      this.helper.presentToast("Please enter Provider Name");
      return;
    }

    if (this.passwordData.username.length == 0) {
      this.helper.presentToast("Please enter Username");
      return;
    }

    if (this.passwordData.username.length > 15) {
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

    if (this.passwordData.password.length > 15) {
      this.helper.presentToast("The password length can't excede more than 15 character");
      return;
    }

    console.log(this.passwordData);

    this.passDBService.addPassword(this.passwordData)
    .then(()=>{
      this.helper.presentToast("Password successfully added");
      this.navCtrl.pop();
    }).catch(error => this.helper.presentToast(error));

  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  scorePassword(pass) {
    var score = 0;
    if (!pass)
      return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i = 0; i < pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
    }

    let variationCount = 0;
    for (var check in variations) {
      variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return score;
  }

  checkPassStrength(ev: any) {
    let pass = ev.value;
    console.log(pass);
    
    var score = this.scorePassword(pass);

    this.zone.run(() =>{
      if (score > 80)
        this.passwordData.strength = "strong";
      if (score > 60)
        this.passwordData.strength = "good";
      if (score >= 30)
        this.passwordData.strength = "weak";
    })
    
    return "";
  }

}


