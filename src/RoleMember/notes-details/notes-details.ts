import { Helper } from './../../Core/services/helper.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { NotesDBServiceProvider } from './services/notes-db.service';


@IonicPage()
@Component({
  selector: 'page-notes-details',
  templateUrl: 'notes-details.html',
})
export class NotesDetailsPage {

  isPresent: boolean = false;
  notesData: any;

  constructor(public navCtrl: NavController,
    public actionCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public helper: Helper,
    public notesService: NotesDBServiceProvider,
    public navParams: NavParams) {
  }

  presentActionSheet(id, item) {
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate Notes Data ',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.goToNotesEditPage(item);
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteNote(id);
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

  ionViewWillEnter() {
    this.initialize();
  }

  initialize() {
    this.notesService.retrieveNotes()
      .then(res => {
        this.notesData = res;
        if (this.notesData.length == 0)
          this.isPresent = false;
        else
          this.isPresent = true;
      });
  }

  goToNotesEditPage(item) {
    this.navCtrl.push("EditNotePage", item);
  }

  goToAddNotePage() {
    this.navCtrl.push("AddNotePage");
  }

  goToViewNotePage(item) {
    this.navCtrl.push("ViewNotePage", item);
  }

  deleteNote(id) {
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
            this.notesService.deleteNotes(id)
              .then(res => {
                this.helper.presentToast("Note has been deleted successfully");
                this.initialize();
              })
          }
        }
      ]
    });
    confirm.present();
  }


  getItems(ev: any) {
    this.notesService.retrieveNotes().then(res => {
      if (res) {
        this.notesData = res;
        const val = ev.target.value;
        if (val && val.trim() != '') {
          this.notesData = this.notesData.filter((item) => {
            return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }

    });

  }


}
