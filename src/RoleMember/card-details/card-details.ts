import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Helper } from '../../Core/services/helper.service';
import { CardDBServiceProvider } from './services/card-db.service';

@IonicPage()
@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
})
export class CardDetailsPage {

  cardData: any;
  isPresent: boolean;

  constructor(public navCtrl: NavController,
    public actionCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public helper: Helper,
    public cardService: CardDBServiceProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.initialize();
  }

  initialize() {
    this.cardService.retrieveCard()
      .then(res => {
        this.cardData = res;
        if (this.cardData.length != 0)
          this.isPresent = true;
        else
          this.isPresent = false;
        console.log(this.cardData);
      });
  }

  viewCard(item) {
    this.navCtrl.push("ViewCardPage", item);
  }


  presentActionSheet(id, item) {
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate Card Details',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.goToeditCardPage(item);
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteCard(id);
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

  goToaddCardPage() {
    this.navCtrl.push("AddCardPage");
  }

  goToeditCardPage(item) {
    this.navCtrl.push("EditCardPage", item);
  }

  deleteCard(id) {
    const confirm = this.alertCtrl.create({
      title: 'Delete Card',
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
            this.cardService.deleteCard(id)
              .then(res => {
                this.helper.presentToast("Card has been successfuly deleted");
                this.initialize();
              });
          }
        }
      ]
    });
    confirm.present();
  }


  getItems(ev: any) {

    this.cardService.retrieveCard().then(res => {
      if (res) {
        this.cardData = res;
        const val = ev.target.value;
        if (val && val.trim() != '') {
          this.cardData = this.cardData.filter((item) => {
            return (item.bank.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }

    });

  }

}
