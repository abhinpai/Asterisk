import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { CoreModule } from '../../Core/core.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
