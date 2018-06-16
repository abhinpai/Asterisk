import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPasswordPage } from './edit-password';
import { PasswordDBServiceProvider } from '../services/password-db.service';
import { CoreModule } from '../../../Core/core.module';

@NgModule({
  declarations: [
    EditPasswordPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(EditPasswordPage),
  ],
  providers:[
    PasswordDBServiceProvider
  ]
})
export class EditPasswordPageModule {}
