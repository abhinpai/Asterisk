import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, normalizeURL } from 'ionic-angular';
import { SystemServiceProvider } from '../../../Core/services/system.service';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@IonicPage()
@Component({
  selector: 'page-add-bank',
  templateUrl: 'add-bank.html',
})
export class AddBankPage {

  // overlayHidden: boolean = false;

  today = new Date().toISOString();
  document_object: any = "data:image/png;base64,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";

  constructor(public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public systemService: SystemServiceProvider,
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
      let base64Image = "data:image/jpeg;base64," + path;
      self.document_object = normalizeURL(base64Image);
    });
  }

  pickFromGallery() {
    let self = this;

    self.systemService.getImageFromGallery([], function (path) {
      console.log(path);
      self.document_object = path[0];
    });
  }

  viewPhoto(){
    this.photoViewer.show(this.document_object);
  }


  // public hideOverlay() {
  //   this.overlayHidden = true;
  // }
}
