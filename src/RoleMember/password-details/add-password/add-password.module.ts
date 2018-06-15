import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPasswordPage } from './add-password';
import { CoreModule } from '../../../Core/core.module';

@NgModule({
  declarations: [
    AddPasswordPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(AddPasswordPage),
  ],
})
export class AddPasswordPageModule {}
