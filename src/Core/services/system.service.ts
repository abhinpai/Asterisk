
import { Injectable } from '@angular/core';

import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Platform, normalizeURL } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

@Injectable()
export class SystemService {

    constructor(public file: File,
        private filePath: FilePath,
        public platform: Platform,
        private imagePicker: ImagePicker,
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
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            quality: 75,
            targetWidth: 720,
            correctOrientation: true,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            MediaType: this.camera.MediaType.PICTURE,
        };

        this.camera.getPicture(CameraOptions).then((fileUri) => {

            this.storeLocally(fileUri, callback);

        }, (err) => {
            console.log(err);
            // Handle error
        });

    }

    getImageFromGallery(options, imageCount, callback) {

        let GalleryOptions = {
            maximumImagesCount: imageCount,
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

                            let imagePaths = [];
                            let counter: number = 0;
                            let totalCount: number = results.length;

                            for (var i = 0; i < results.length; i++) {

                                var fileUri = results[i];

                                this.storeLocally(fileUri, function (path) {
                                    imagePaths.push(path);

                                    counter = counter + 1;

                                    if (counter === totalCount) {
                                        callback(imagePaths);
                                    }

                                    // Keep keep marking once the current one is done
                                    // also check if the total done count is same as images length
                                    // if yes, call the callback
                                });
                            }
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




    storeLocally(file_resource_url, callback, sourceType?) {

        let self = this;

        file_resource_url = this.prepareFileUrl(file_resource_url);

        let paths = this.getPathDetails(file_resource_url, sourceType);

        let newFileName = this.createNewFileName(paths['src_file']);

        // take the file resource url
        // create a new name for the file
        // copy the file to uploads directory
        // send the local file url

        let uploadDirectory = this.file.dataDirectory + 'uploads/';

        this.prepareDirectory(function () {

            self.file.resolveLocalFilesystemUrl(file_resource_url)
                .then(res => {

                    self.file.copyFile(paths['src_dir'], res.name, uploadDirectory, newFileName)
                        .then(success => {

                            self.file.resolveLocalFilesystemUrl(self.file.dataDirectory + 'uploads/' + newFileName)
                                .then(res => {

                                    // file exists locally
                                    let filePath = res.nativeURL;

                                    let path: any = {};

                                    path.native_url = filePath;
                                    path.display_url = normalizeURL(filePath);

                                    callback(path);

                                })
                                .catch(error => {
                                    console.log("Error from local file " + error);
                                });

                        }, error => {
                            console.log(error)
                        });

                })
                .catch(error => {
                    console.log("Error from local file " + error);
                });

        });
    }

    prepareDirectory(callback) {

        let self = this;

        this.file.checkDir(this.file.dataDirectory, 'uploads')
            .then(success => {
                callback();
            })
            .catch(err => {
                self.file.createDir(self.file.dataDirectory, 'uploads', true)
                    .then(res => {
                        callback();
                    });
            });
    }

    getPathDetails(file_resource_url, sourceType) {

        let path = [];

        // Special handling for Android library
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

            this.filePath.resolveNativePath(file_resource_url)
                .then(filePath => {
                    path['src_file'] = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    path['src_dir'] = file_resource_url.substring(file_resource_url.lastIndexOf('/') + 1, file_resource_url.lastIndexOf('?'));
                });

        } else {

            path['src_file'] = file_resource_url.substr(file_resource_url.lastIndexOf('/') + 1);
            path['src_dir'] = file_resource_url.substr(0, file_resource_url.lastIndexOf('/') + 1);
        }

        return path;
    }

    createNewFileName(filename) {
        return filename;
    }

}
