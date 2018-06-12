import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-bank',
  templateUrl: 'add-bank.html',
})
export class AddBankPage {

  today = new Date().toISOString();
  constructor(public navCtrl: NavController, 
    public actionCtrl:ActionSheetController,
    public navParams: NavParams) {
  }

  presentActionSheet() {
    let actionSheet = this.actionCtrl.create({
      title: 'Select Documents/Media Files',
      buttons: [
        {
          text: 'From camera',
          handler: () => {
           
          }
        },
        {
          text: 'From Gallery',
          handler: () => {
           
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }


}
