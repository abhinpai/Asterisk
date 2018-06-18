import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCardPage } from './add-card';
import { CoreModule } from '../../../Core/core.module';
import { CardDBServiceProvider } from '../services/card-db.service';

@NgModule({
  declarations: [
    AddCardPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(AddCardPage),
  ],
  providers:[
    CardDBServiceProvider
  ]
})
export class AddCardPageModule {}
