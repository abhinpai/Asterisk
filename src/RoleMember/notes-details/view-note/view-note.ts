import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {

  notesData = {
    title: '',
    description: '',
    created_at: null,
    updated_at: null
  };


  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    let data = this.navParams.data;
    this.notesData.title = data.title;
    this.notesData.description = data.description;
    this.notesData.created_at = data.created_at;
    this.notesData.updated_at = data.updated_at;

  }



}
