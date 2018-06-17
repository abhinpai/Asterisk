import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesDetailsPage } from './notes-details';
import { CoreModule } from '../../Core/core.module';
import { NotesDBServiceProvider } from './services/notes-db.service';

@NgModule({
  declarations: [
    NotesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesDetailsPage),
    CoreModule
  ],
  providers:[
    NotesDBServiceProvider
  ]
})
export class NotesDetailsPageModule {}
