import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNotePage } from './add-note';
import { CoreModule } from '../../../Core/core.module';
import { NotesDBServiceProvider } from '../services/notes-db.service';

@NgModule({
  declarations: [
    AddNotePage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(AddNotePage),
  ],
  providers:[
    NotesDBServiceProvider
  ]
})
export class AddNotePageModule {}
