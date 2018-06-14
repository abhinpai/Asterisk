import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CoreModule } from '../../Core/core.module';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    CoreModule
  ],
  providers:[
    PhotoViewer
  ]
})
export class HomePageModule {}
