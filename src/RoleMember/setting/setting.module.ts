import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { CoreModule } from '../../Core/core.module';
import { SystemModule } from '../../Core/system.module';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    CoreModule,
    SystemModule, 
    IonicPageModule.forChild(SettingPage),
  ],
  providers:[
    PhotoViewer
  ]

})
export class SettingPageModule {}
