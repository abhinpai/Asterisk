import { NgModule } from '@angular/core';
import { UserAvatarComponent } from './components/user-avatar';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [
        UserAvatarComponent,
    ],
    imports:[
        IonicModule
    ],
    exports: [
        UserAvatarComponent
    ],
})
export class CoreModule { }
