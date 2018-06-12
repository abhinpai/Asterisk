
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Custom Compoents declaration
import { UserAvatarComponent } from './components/user-avatar';

// Custom service declaration
import { AuthServiceProvider } from './services/auth.services';
import { SystemServiceProvider } from './services/system.service';
import { Helper } from './services/helper.service';

// In-built Plugin declaration
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

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
        AndroidPermissions,
        Camera,
        ImagePicker,
        SystemServiceProvider,
        AuthServiceProvider,
        Helper
    ]
})
export class CoreModule { }
