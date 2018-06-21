import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-bank',
  templateUrl: 'view-bank.html',
})
export class ViewBankPage {

  bankData = {
    bank: '',
    bank_logo: '',
    ac_holder_name: '',
    ac_no: '',
    ifsc: '',
    nomine: '',
    phone: '',
    email: '',
    address: '',
    primary_no: '',
    secondary_no: '',
    fax: '',
    bank_email: '',
    documents: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    let data = this.navParams.data;
    // alert(data);
    
    this.bankData.bank = data.bank;
    this.bankData.bank_logo = data.bank_logo;
    this.bankData.ac_holder_name = data.ac_holder_name;
    this.bankData.ac_no = data.ac_no;
    this.bankData.ifsc = data.ifsc;
    this.bankData.nomine = data.nomine;
    this.bankData.phone = data.phone;
    this.bankData.email = data.email;
    this.bankData.address = data.address;
    this.bankData.primary_no = data.primary_no;
    this.bankData.secondary_no = data.secondary_no;
    this.bankData.fax = data.fax;
    this.bankData.bank_email = data.bank_email;
    this.bankData.documents = data.documents;
    this.bankData.created_at = data.created_at;
    this.bankData.updated_at = data.updated_at;
  }

}
