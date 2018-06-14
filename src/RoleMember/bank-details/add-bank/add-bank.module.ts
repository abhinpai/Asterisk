import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBankPage } from './add-bank';
import { CoreModule } from '../../../Core/core.module';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SystemModule } from '../../../Core/system.module';

@NgModule({
  declarations: [
    AddBankPage,
  ],
  imports: [
    CoreModule,
    SystemModule,
    IonicPageModule.forChild(AddBankPage),
  ],
  providers:[
    PhotoViewer
  ]
})
export class AddBankPageModule {}
