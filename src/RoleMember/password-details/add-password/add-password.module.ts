import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPasswordPage } from './add-password';
import { CoreModule } from '../../../Core/core.module';
import { PasswordDBServiceProvider } from '../services/password-db.service';

@NgModule({
  declarations: [
    AddPasswordPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(AddPasswordPage),
  ],
  providers:[
    PasswordDBServiceProvider
  ]
})
export class AddPasswordPageModule {}
