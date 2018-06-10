import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesDetailsPage } from './notes-details';

@NgModule({
  declarations: [
    NotesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesDetailsPage),
  ],
})
export class NotesDetailsPageModule {}
