import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SystemService } from '../../../Core/services/system.service';

@IonicPage()
@Component({
  selector: 'page-add-bank',
  templateUrl: 'add-bank.html',
})
export class AddBankPage {

  // overlayHidden: boolean = false;

  today = new Date().toISOString();
  document_object: any;

  constructor(public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public systemService: SystemService,
    public actionCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  presentActionSheet() {
    let actionSheet = this.actionCtrl.create({
      title: 'Select Documents/Media Files',
      buttons: [
        {
          text: 'From camera',
          handler: () => {
            this.pickFromCamera();
          }
        },
        {
          text: 'From Gallery',
          handler: () => {
            this.pickFromGallery();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }


  pickFromCamera() {
    let self = this;

    self.systemService.getImageFromCamera([], function (path) {
      console.log(path);
      self.document_object = path.display_url;
    });
  }

  pickFromGallery() {
    let self = this;

    self.systemService.getImageFromGallery([], 1,  function (path) {
      console.log(path);
      self.document_object = path[0].display_url;
    });
  }

  viewPhoto(){
    this.photoViewer.show(this.document_object);
  }

  removePhoto(){
    this.document_object = null;
  }


}
