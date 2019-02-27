import { BankDBServiceProvider } from './services/bank-db.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { Helper } from '../../Core/services/helper.service';

@IonicPage()
@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage {

  bankData: any;
  isPresent: boolean;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public helper: Helper,
    public bankService: BankDBServiceProvider,
    public actionCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.initialize();
  }

  initialize(){
    this.bankService.retrieveBank()
    .then(res =>{
      this.bankData = res;
      if(this.bankData.length > 0)
      this.isPresent = true;
      else
      this.isPresent = false;
    })
  }

  goToViewBankPage(item) {
    this.navCtrl.push("ViewBankPage", item);
  }

  presentActionSheet(id, item) {
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate Bank Details',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.goToEditBankPage(item);
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteBankDetails(id);
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

  goToEditBankPage(item) {
    this.navCtrl.push("EditBankPage", item);
  }

  goToAddBankPage(){
    this.navCtrl.push("AddBankPage");
  }

  deleteBankDetails(id) {
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

            this.bankService.deleteBank(id)
            .then(res =>{
              this.helper.presentToast("Bank details has been deleted successfully");
              this.initialize();
            }).catch(e => console.log(e));

          }
        }
      ]
    });
    confirm.present();
  }

  getItems(ev: any) {
    this.bankService.retrieveBank().then(res => {
      if (res) {
        this.bankData = res;
        const val = ev.target.value;
        if (val && val.trim() != '') {
          this.bankData = this.bankData.filter((item) => {
            return (item.bank.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }
    });
  }


}
