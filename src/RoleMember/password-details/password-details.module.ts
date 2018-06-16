import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordDetailsPage } from './password-details';
import { PasswordDBServiceProvider } from './services/password-db.service';
import { CoreModule } from '../../Core/core.module';

@NgModule({
  declarations: [
    PasswordDetailsPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(PasswordDetailsPage),
  ],
  providers:[
    PasswordDBServiceProvider
  ]
})
export class PasswordDetailsPageModule {}
