import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage {

  item = [1, 2, 3, 4, 5];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public actionCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  goToViewBankPage() {
    this.navCtrl.push("ViewBankPage");
  }

  presentActionSheet() {
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate Bank Details',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.goToEditBankPage();
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteBankDetails();
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

  goToEditBankPage() {
    this.navCtrl.push("EditBankPage");
  }

  goToAddBankPage(){
    this.navCtrl.push("AddBankPage");
  }

  deleteBankDetails() {
    const confirm = this.alertCtrl.create({
      title: 'Delete Bank Details',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes, Delete',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

}
