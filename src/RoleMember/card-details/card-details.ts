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

  viewCard() {
    this.navCtrl.push("ViewCardPage");
    console.log("Test");
  }


  presentActionSheet() {
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate Card Details',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.goToeditCardPage();
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteCard();
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

  goToeditCardPage() {
    this.navCtrl.push("EditCardPage");
  }

  deleteCard() {
    const confirm = this.alertCtrl.create({
      title: 'Delete card',
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
