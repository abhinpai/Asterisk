import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Helper } from '../../../Core/services/helper.service';
import { CardDBServiceProvider } from '../services/card-db.service';

@IonicPage()
@Component({
  selector: 'page-edit-card',
  templateUrl: 'edit-card.html',
})
export class EditCardPage {

  type = "password";
  visible: boolean = false;
  cardData: any;
  service_logos: any;


  constructor(public navCtrl: NavController, 
    public helper: Helper,
    public cardService: CardDBServiceProvider,
    public http: HttpClient,
    public navParams: NavParams) {
    this.initializeServiceLogo();

    this.cardData = this.navParams.data;
  }



  initializeServiceLogo() {
    this.http.get('assets/service_provider_logos.json')
      .subscribe(res => {
        this.service_logos = res;
      });

    console.log("clearing");
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

  detectCardType(ev: any) {
    this.initializeServiceLogo();

    const number = ev.value;
    console.log(number);

    var re = {
      electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
      mastero: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
      dankort: /^(5019)\d+$/,
      interpayment: /^(636)\d+$/,
      unionpay: /^(62|88)\d+$/,
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      americanexpress: /^3[47][0-9]{13}$/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
      // rupay: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    }

    for (var key in re) {
      if (re[key].test(number)) {
        this.cardData.service_provider = key;
        console.log(this.cardData.service_provider);
      }
    }

    for (let i = 0; i < this.service_logos.length; i++) {
      if (this.service_logos[i].name == this.cardData.service_provider) {
        this.cardData.provider_logo = this.service_logos[i].path;
      }
    }

    console.log(this.cardData.provider_logo);

  }

  editCardDetail(){
    this.cardService.updateCard(this.cardData)
    .then(res =>{
      this.helper.presentToast("Card details has been updated successfully");
      this.navCtrl.pop();
    }).catch(e => console.log(e));
  }

  setProviderLogo() {
    for (let i = 0; i < this.service_logos.length; i++) {
      if (this.service_logos[i].name == this.cardData.service_provider.toLowerCase()) {
        this.cardData.provider_logo = this.service_logos[i].path;
      }
    }
  }

}
