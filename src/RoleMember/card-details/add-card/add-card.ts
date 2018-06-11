import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {

  type = "password";
  visible: boolean = false;

  today = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showPin(){
    if(this.visible){
      this.visible = false;
      this.type = "password"
    } else {
      this.visible = true;
      this.type = "text"
    }
  }

  addNewCard(){

  }

}
