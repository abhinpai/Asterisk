import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage {

  item = [1, 2, 3, 4, 5];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
