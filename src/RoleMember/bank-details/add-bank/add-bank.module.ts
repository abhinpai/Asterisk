import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBankPage } from './add-bank';
import { CoreModule } from '../../../Core/core.module';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    AddBankPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(AddBankPage),
  ],
  providers:[
    PhotoViewer
  ]
})
export class AddBankPageModule {}
