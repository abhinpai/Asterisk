import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-card',
  templateUrl: 'view-card.html',
})
export class ViewCardPage {

  constructor(public navCtrl: NavController, 
    public alertCtrl:AlertController,
    public navParams: NavParams) {
  }

  viewPIN(){
    const alert = this.alertCtrl.create({
      title: 'Your card PIN',
      subTitle: '1234',
      message: 'Do not share your PIN and CVV or any credential with any suspecious person or with anybody!',
      buttons: ['OK']
    });
    alert.present();
  }


}
