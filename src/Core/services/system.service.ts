
import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

@Injectable()
export class SystemServiceProvider {

    constructor(private imagePicker: ImagePicker,
        private androidPermissions: AndroidPermissions,
        private camera: Camera) { }


    prepareFileUrl(file_resource_url) {

        if (file_resource_url.indexOf('file:///') === -1) {
            file_resource_url = 'file:///' + file_resource_url;
        }

        return file_resource_url;
    }


    getImageFromCamera(options, callback) {

        var CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            quality: 75,
            targetWidth: 720,
            correctOrientation: true,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            MediaType: this.camera.MediaType.PICTURE,
        };

        this.camera.getPicture(CameraOptions).then((fileUri) => {

            callback(fileUri);

        }, (err) => {
            console.log(err);
            // Handle error
        });

    }

    getImageFromGallery(options, callback) {

        let GalleryOptions = {
            maximumImagesCount: 1,
            width: 500,
            height: 500,
            quality: 75
        };

        let self = this;

        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
            .then(success => {

                if (success.hasPermission) {

                    self.imagePicker.getPictures(GalleryOptions)
                        .then((results) => {

                            callback(results);

                        }, (err) => {
                            console.log(err);
                        });

                }
                else {
                    self.androidPermissions.requestPermissions([self.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE])
                }
            },
                err => console.log('Cannot check for permission'));
    }



}