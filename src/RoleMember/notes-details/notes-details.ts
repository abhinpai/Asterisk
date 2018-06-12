
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notes-details',
  templateUrl: 'notes-details.html',
})
export class NotesDetailsPage {

  item = [1, 2, 3];

  constructor(public navCtrl: NavController,
    public actionCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  presentActionSheet() {
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate Notes Data ',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.goToNotesEditPage();
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteNote();
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

  goToNotesEditPage() {
    this.navCtrl.push("EditNotePage");
  }

  goToAddNotePage(){
    this.navCtrl.push("AddNotePage");
  }

  goToViewNotePage() {
    this.navCtrl.push("ViewNotePage");
  }

  deleteNote() {
    const confirm = this.alertCtrl.create({
      title: 'Delete note',
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
