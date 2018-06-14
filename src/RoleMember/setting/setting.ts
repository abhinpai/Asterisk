import { SystemService } from './../../Core/services/system.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, Events } from 'ionic-angular';
import { AuthServiceProvider } from '../../Core/services/auth.services';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Helper } from '../../Core/services/helper.service';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  profilePhoto: any;
  userName: any;
  phone: any;
  email: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public events: Events,
    public actionCtrl: ActionSheetController,
    public systemService: SystemService,
    private photoViewer: PhotoViewer,
    public helper: Helper,
    public authService: AuthServiceProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.profilePhoto = localStorage.getItem('ProfilePhoto');
    this.userName = localStorage.getItem('UserName');
    this.phone = localStorage.getItem('U-Phone');
    this.email = localStorage.getItem('Email');
  }

  signout() {
    this.authService.shutDownUser();
  }

  resetPIN() {
    const prompt = this.alertCtrl.create({
      title: 'Reset PIN',
      message: "Enter the registered Phone no reset the PIN.",
      inputs: [
        {
          name: 'Phone',
          placeholder: 'Enter Phone No',
          type: 'text',
        },
        {
          name: 'New',
          placeholder: 'Enter New PIN',
          type: 'text',
        },
        {
          name: 'Confirm',
          placeholder: 'Confirm Entered PIN',
          type: 'text',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (data.Phone.length == 0) {
              this.helper.presentToast("Phone No can not be empty");
              return;
            } else if (data.Phone.length != 10) {
              this.helper.presentToast("Please enter valid Phone No and Try again");
              return;
            } else if (data.Phone != this.phone) {
              this.helper.presentToast("Phone No mismatch, Please enter registered Phone No");
              return;
            } else if (data.New.length == 0) {
              this.helper.presentToast("PIN can not be empty");
              return;
            } else if (data.New.length != 4) {
              this.helper.presentToast("Please enter valid PIN and Try again");
              return;
            } else if (data.Confirm.length == 0) {
              this.helper.presentToast("PIN can not be empty");
              return;
            } else if (data.Confirm.length != 4) {
              this.helper.presentToast("Please enter valid PIN and Try again");
              return;
            } else if (data.New != data.Confirm) {
              this.helper.presentToast("Mismatch PIN, please verify the entered PIN and try again");
              return;
            } else {
              localStorage.setItem("U-PIN", data.New);
              this.helper.presentToast("Congragulations, Your PIN has been reset successfully");
            }


          }
        }
      ]
    });
    prompt.present();

  }

  viewProfilePhoto() {
    this.photoViewer.show(this.profilePhoto);
  }

  setEmail() {
    const prompt = this.alertCtrl.create({
      title: 'Set Email',
      message: "Enter Valid Email Address",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Enter Email Address',
          type: 'email',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (data.Email.length == 0) {

              this.helper.presentToast("Email address can not be empty!");
              return;

            } else {
              localStorage.setItem('Email', data.Email);
              this.email = localStorage.getItem('Email');
            }
          }
        }
      ]
    });
    prompt.present();

  }

  setUsername() {
    const prompt = this.alertCtrl.create({
      title: 'Set Username',
      inputs: [
        {
          name: 'Username',
          placeholder: 'Enter Your Name',
          type: 'text',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {

            localStorage.setItem('UserName', data.Username);
            this.userName = localStorage.getItem('UserName');
          }
        }
      ]
    });
    prompt.present();

  }

  setProfilePhoto() {
    let actionSheet = this.actionCtrl.create({
      title: 'Select Profile Photo',
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
          text: 'Delete Profile Photo',
          handler: () => {
            this.deleteProfilePhoto();
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

  setPhone() {
    const prompt = this.alertCtrl.create({
      title: 'Set Phone No',
      message: "Enter Valid Phone No",
      inputs: [
        {
          name: 'Phone',
          placeholder: 'Enter Phone No',
          type: 'tel',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (data.Phone.length == 0) {

              this.helper.presentToast("Phone No can not be empty!");
              return;

            } else if (data.Phone.length != 10) {

              this.helper.presentToast("Please enter valid Phone No");
              return;

            } else {

              localStorage.setItem('U-Phone', data.Phone);
              this.phone = localStorage.getItem('U-Phone');
            }
          }
        }
      ]
    });
    prompt.present();
  }

  deleteProfilePhoto() {
    localStorage.setItem('ProfilePhoto', 'assets/imgs/default-profilePhoto.png');
    this.profilePhoto = localStorage.getItem('ProfilePhoto');
    this.events.publish('update-profile-photo');
  }

  pickFromCamera() {
    let self = this;

    self.systemService.getImageFromCamera([], function (path) {
      console.log(path);
      localStorage.setItem('ProfilePhoto', path.display_url);
      self.profilePhoto = path.display_url;
      this.events.publish('update-profile-photo');
    });
  }

  pickFromGallery() {
    let self = this;

    self.systemService.getImageFromGallery([], 1, function (path) {
      console.log(path);
      localStorage.setItem('ProfilePhoto', path[0].display_url);
      self.profilePhoto = path[0].display_url;
      this.events.publish('update-profile-photo');
    });
  }


}
