import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-card',
  templateUrl: 'edit-card.html',
})
export class EditCardPage {

  type = "password";
  visible: boolean = false;

  today = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  editCardDetail(){
    
  }

}
