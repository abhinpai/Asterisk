import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDetailsPage } from './card-details';
import { CoreModule } from '../../Core/core.module';
import { CardDBServiceProvider } from './services/card-db.service';

@NgModule({
  declarations: [
    CardDetailsPage,
  ],
  imports: [
    CoreModule,
    IonicPageModule.forChild(CardDetailsPage),
  ],
  providers: [
    CardDBServiceProvider
  ]
})
export class CardDetailsPageModule {}
