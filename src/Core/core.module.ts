import { NgModule } from '@angular/core';
import { UserAvatarComponent } from './components/user-avatar';
import { IonicModule } from 'ionic-angular';
import { AuthServiceProvider } from './services/Auth.services';

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
    providers:[
        AuthServiceProvider
    ]
})
export class CoreModule { }
