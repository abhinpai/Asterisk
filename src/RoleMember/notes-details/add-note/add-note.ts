import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Helper } from '../../../Core/services/helper.service';
import { NotesDBServiceProvider } from '../services/notes-db.service';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  notes = {
    title: '',
    description: '',
    created_at: null,
    updated_at: null
  };

  constructor(public navCtrl: NavController,
    public helper: Helper,
    public notesService: NotesDBServiceProvider,
    public navParams: NavParams) {
  }

  addNote() {
    this.notes.created_at = this.notes.updated_at = new Date().toISOString();

    if (this.notes.title.length == 0) {
      this.helper.presentToast("Please enter title");
      return
    } else if (this.notes.title.length > 100) {
      this.helper.presentToast("The title can not be exceed 50 characters");
      return
    } else if (this.notes.description.length == 0) {
      this.helper.presentToast("Please enter description");
      return
    } else if (this.notes.description.length > 1000) {
      this.helper.presentToast("The description can not be exceed 50 characters");
      return
    } else {
      this.notesService.addNotes(this.notes)
      .then(res =>{
        this.helper.presentToast("Notes successfully added");
        this.navCtrl.pop();
      }).catch(e => console.log(e));
    }
  }


}
