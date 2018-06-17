import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Helper } from '../../../Core/services/helper.service';
import { NotesDBServiceProvider } from '../services/notes-db.service';

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {

  notesData: any;

  constructor(public navCtrl: NavController,
    public helper: Helper,
    public notesService: NotesDBServiceProvider,
     public navParams: NavParams) {

      this.notesData = this.navParams.data;
  }

  saveNote(){

    // this.notesData.updated_at = new Date().toISOString();

    if (this.notesData.title.length == 0) {
      this.helper.presentToast("Please enter title");
      return
    } else if (this.notesData.title.length > 100) {
      this.helper.presentToast("The title can not be exceed 50 characters");
      return
    } else if (this.notesData.description.length == 0) {
      this.helper.presentToast("Please enter description");
      return
    } else if (this.notesData.description.length > 1000) {
      this.helper.presentToast("The description can not be exceed 50 characters");
      return
    } else {
      this.notesService.updateNotes(this.notesData)
        .then(res => {
          this.helper.presentToast("Note has been updated successfully");
          this.navCtrl.pop();
        }).catch(e => {
          this.helper.presentToast(e);
        });
    }

    
    
  }


}
