
import { PasswordDBServiceProvider } from './services/password-db.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Helper } from '../../Core/services/helper.service';

@IonicPage()
@Component({
  selector: 'page-password-details',
  templateUrl: 'password-details.html',
})
export class PasswordDetailsPage {

  isPresent: boolean;
  passwordData: any;
  logo: any;

  constructor(public navCtrl: NavController,
    public actionCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public helper: Helper,
    public passDBService: PasswordDBServiceProvider,
    public navParams: NavParams) { }

  ionViewWillEnter() {
   this.initialize();
  }

  initialize(){
    this.passDBService.retrievePassword()
      .then(res => {
        this.passwordData = res;
        if (this.passwordData.length == 0)
          this.isPresent = false;
        else
          this.isPresent = true;
      });
  }


  goToViewPasswordPage(data) {
    this.navCtrl.push("ViewPasswordPage", data);
  }

  presentActionSheet(id, data) {
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate credential',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.editCredetial(data);
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteCredentials(id);
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

  addCredetial() {
    this.navCtrl.push("AddPasswordPage");
  }

  viewPassword(index) {
    const alert = this.alertCtrl.create({
      title: 'Your password is',
      subTitle: this.passwordData[index].password,
      message: 'Do not share your password with any suspecious person or with anybody!',
      buttons: ['OK']
    });
    alert.present();
  }

  editCredetial(data) {
    this.navCtrl.push("EditPasswordPage", data);
  }

  deleteCredentials(id) {
    const confirm = this.alertCtrl.create({
      title: 'Delete Credentials',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes, Delete',
          handler: () => {
            this.passDBService.deletePassword(id)
            .then(res =>{
              this.initialize();
              this.helper.presentToast("Password has been deleted successfully");
            }).catch(e => console.log(e));
          }
        }
      ]
    });
    confirm.present();
  }

  getItems(ev: any) {

    this.passDBService.retrievePassword().then(res =>{
      if(res){
        this.passwordData = res;
        const val = ev.target.value;
        if (val && val.trim() != '') {
          this.passwordData = this.passwordData.filter((item) => {
            return (item.provider.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }

    });
    
  }

}
