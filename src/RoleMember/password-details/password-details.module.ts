import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordDetailsPage } from './password-details';
import { PasswordDBServiceProvider } from './services/password-db.service';

@NgModule({
  declarations: [
    PasswordDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordDetailsPage),
  ],
  providers:[
    PasswordDBServiceProvider
  ]
})
export class PasswordDetailsPageModule {}
