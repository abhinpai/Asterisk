import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCardPage } from './add-card';
import { CoreModule } from '../../../Core/core.module';

@NgModule({
  declarations: [
    AddCardPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(AddCardPage),
  ],
})
export class AddCardPageModule {}
