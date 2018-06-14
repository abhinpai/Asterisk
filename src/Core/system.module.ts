

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Custom service declaration
import { SystemService } from './services/system.service';

// In-built Plugin declaration
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

@NgModule({
    declarations: [
        
    ],
    imports:[
        IonicModule
    ],
    exports: [
        
    ],
    providers:[
        File,
        FilePath,
        AndroidPermissions,
        Camera,
        ImagePicker,
        SystemService,
    ]
})
export class SystemModule { }
