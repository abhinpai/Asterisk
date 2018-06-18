import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CardDBServiceProvider } from '../services/card-db.service';

@IonicPage()
@Component({
  selector: 'page-view-card',
  templateUrl: 'view-card.html',
})
export class ViewCardPage {

  cardData = {
    bank_logo: '',
    bank: '',
    created_at: '',
    card_no: '',
    expire_at: '',
    provider_logo: '',
    card_type: '',
    cvv: '',
    pin: '',
    email: '',
    phone: '',
  }

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public cardService: CardDBServiceProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
        let data = this.navParams.data;
        this.cardData.bank = data.bank;
        this.cardData.bank_logo = data.bank_logo;
        this.cardData.created_at = data.created_at;
        this.cardData.card_no = data.card_no;
        this.cardData.expire_at = data.expire_at;
        this.cardData.provider_logo = data.provider_logo;
        this.cardData.card_type = data.card_type;
        this.cardData.cvv = data.cvv;
        this.cardData.pin = data.pin;
        this.cardData.email = data.email;
        this.cardData.phone = data.phone;
  }



  viewPIN() {
    const alert = this.alertCtrl.create({
      title: 'Your card PIN',
      subTitle: this.cardData.pin,
      message: 'Do not share your PIN and CVV or any credential with any suspecious person or with anybody!',
      buttons: ['OK']
    });
    alert.present();
  }


}
