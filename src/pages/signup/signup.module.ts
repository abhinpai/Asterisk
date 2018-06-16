import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { CoreModule } from '../../Core/core.module';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {}
