
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Custom Compoents declaration
import { UserAvatarComponent } from './components/user-avatar';

// Custom service declaration
import { AuthServiceProvider } from './services/auth.services';
import { Helper } from './services/helper.service';


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
        AuthServiceProvider,
        Helper
    ]
})
export class CoreModule { }
