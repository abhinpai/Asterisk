
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  userName: any;
  profilePhoto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.userName = localStorage.getItem('UserName');
    this.profilePhoto = localStorage.getItem('ProfilePhoto');
  }

  goToSettingPage() {
    this.navCtrl.push("SettingPage");
  }

  goToBankDetailsPage() {
    this.navCtrl.push("BankDetailsPage")
  }

  goToCardDetailsPage() {
    this.navCtrl.push("CardDetailsPage")
  }

  goToDocumentsPage() {
    this.navCtrl.push("DocumentsPage")
  }

  goToPasswordDetailsPage() {
    this.navCtrl.push("PasswordDetailsPage")
  }

  goToNotesDetailsPage() {
    this.navCtrl.push("NotesDetailsPage")
  }
}
