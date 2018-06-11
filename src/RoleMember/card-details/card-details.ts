import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
})
export class CardDetailsPage {

  item = [1, 2, 3, 4, 5]

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  viewCard(){
    this.navCtrl.push("ViewCardPage");
    console.log("Test");
  }

}
