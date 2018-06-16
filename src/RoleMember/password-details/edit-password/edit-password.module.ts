import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPasswordPage } from './edit-password';
import { PasswordDBServiceProvider } from '../services/password-db.service';

@NgModule({
  declarations: [
    EditPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPasswordPage),
  ],
  providers:[
    PasswordDBServiceProvider
  ]
})
export class EditPasswordPageModule {}
