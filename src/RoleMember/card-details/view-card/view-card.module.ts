import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCardPage } from './view-card';

@NgModule({
  declarations: [
    ViewCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCardPage),
  ],
})
export class ViewCardPageModule {}
