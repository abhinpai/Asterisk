import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditNotePage } from './edit-note';
import { NotesDBServiceProvider } from '../services/notes-db.service';
import { CoreModule } from '../../../Core/core.module';

@NgModule({
  declarations: [
    EditNotePage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(EditNotePage),
  ],
  providers:[
    NotesDBServiceProvider
  ]
})
export class EditNotePageModule {}
