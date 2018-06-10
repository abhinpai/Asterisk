import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { CoreModule } from '../../Core/core.module';

@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(SettingPage),
  ],

})
export class SettingPageModule {}
