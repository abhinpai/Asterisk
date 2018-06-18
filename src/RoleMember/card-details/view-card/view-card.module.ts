import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCardPage } from './view-card';
import { CardDBServiceProvider } from '../services/card-db.service';

@NgModule({
  declarations: [
    ViewCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCardPage),
  ],
  providers: [
    CardDBServiceProvider
  ]
})
export class ViewCardPageModule { }
