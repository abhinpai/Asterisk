import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Helper } from '../../../Core/services/helper.service';


@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {

  type = "password";
  visible: boolean = false;
  bank_logos: any;
  service_logos: any;

  cardData = {
    bank: '',
    ac_holder_name: '',
    ac_no: '',
    card_no: '',
    ifsc: '',
    cvv: '',
    pin: '',
    phone: '',
    email: '',
    card_type: '',
    service_provider: '',
    bank_logo: '',
    provider_logo: '',
    expire_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public helper: Helper,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.initializeBankLogo();
    this.initializeServiceLogo();
  }

  initializeBankLogo() {
    this.http.get('assets/bank.json')
      .subscribe(res => {
        this.bank_logos = res;
      });

    this.cardData.bank_logo = localStorage.getItem('ErrorPhoto');
  }

  initializeServiceLogo() {
    this.http.get('assets/service_provider_logos.json')
      .subscribe(res => {
        this.service_logos = res;
      });


    this.cardData.provider_logo = '';
    this.cardData.service_provider = '';
    console.log("clearing");
  }

  setBankLogo(ev: any) {
    this.initializeBankLogo();
    const val = ev.value.toLowerCase();
    for (let i = 0; i < this.bank_logos.length; i++) {
      if (this.bank_logos[i].name.toLowerCase() == val || this.bank_logos[i].primary_name.toLowerCase() == val || this.bank_logos[i].secondary_name.toLowerCase() == val) {
        this.cardData.bank_logo = this.bank_logos[i].path
      }
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




  showPin() {
    if (this.visible) {
      this.visible = false;
      this.type = "password"
    } else {
      this.visible = true;
      this.type = "text"
    }
  }

  addNewCard() {

    if (this.cardData.bank.length == 0) {
      this.helper.presentToast("Please enter Bank Name");
      return;
    }

    if (this.cardData.card_no.length < 14 || this.cardData.card_no.length > 19) {
      this.helper.presentToast("Please enter valid card no");
      return;
    }

    if (this.cardData.card_type == '') {
      this.helper.presentToast("Please select card type");
      return;
    }

    if (this.cardData.cvv.length == 0) {
      this.helper.presentToast("Please enter CVV and try again");
      return;
    }

    if (this.cardData.cvv.length != 3) {
      this.helper.presentToast("Please enter valid CVV");
      return;
    }

    if (this.cardData.pin.length == 0) {
      this.helper.presentToast("Please enter PIN and try again");
      return;
    }

    if (this.cardData.pin.length > 5) {
      this.helper.presentToast("Please enter valid PIN");
      return;
    }

    if (this.cardData.phone.length > 10) {
      this.helper.presentToast("Please enter valid Phone No");
      return;
    }

    if (this.cardData.service_provider.length == 0) {
      this.helper.presentToast("Please select card provider if not found by default wile entering card no");
      return;
    }

    if (this.cardData.email.length != 0) {
      if (!this.validateEmail(this.cardData.email)) {
        this.helper.presentToast("Please enter valid email address");
        return;
      }
    }

    console.log(this.cardData);

  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  setProviderLogo(){
    console.log("123");
    
    for (let i = 0; i < this.service_logos.length; i++) {
      if (this.service_logos[i].name == this.cardData.service_provider.toLowerCase()) {
        this.cardData.provider_logo = this.service_logos[i].path;
      }
    }
  }

}
