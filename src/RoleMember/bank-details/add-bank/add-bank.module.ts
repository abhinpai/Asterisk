import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBankPage } from './add-bank';
import { CoreModule } from '../../../Core/core.module';

@NgModule({
  declarations: [
    AddBankPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(AddBankPage),
  ],
  providers:[
    
  ]
})
export class AddBankPageModule {}
