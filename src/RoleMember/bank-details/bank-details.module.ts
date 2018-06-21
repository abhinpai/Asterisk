import { BankDBServiceProvider } from './services/bank-db.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankDetailsPage } from './bank-details';
import { CoreModule } from '../../Core/core.module';

@NgModule({
  declarations: [
    BankDetailsPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(BankDetailsPage),
  ],
  providers:[
    BankDBServiceProvider
  ]
})
export class BankDetailsPageModule {}
