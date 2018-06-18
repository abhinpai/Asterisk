import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCardPage } from './edit-card';
import { CoreModule } from '../../../Core/core.module';
import { CardDBServiceProvider } from '../services/card-db.service';

@NgModule({
  declarations: [
    EditCardPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(EditCardPage),
  ],
  providers: [
    CardDBServiceProvider
  ]
})
export class EditCardPageModule { }
