import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notes-details',
  templateUrl: 'notes-details.html',
})
export class NotesDetailsPage {

  item = [1,2,3];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
