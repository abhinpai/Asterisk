
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-password-details',
  templateUrl: 'password-details.html',
})
export class PasswordDetailsPage {

  isPresent: boolean;

  item = [1,2,3,4,5];

  constructor(public navCtrl: NavController, 
    public actionCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  goToViewPasswordPage(){
    this.navCtrl.push("ViewPasswordPage");
  }

  presentActionSheet(){
    let actionSheet = this.actionCtrl.create({
      title: 'Manipulate credential',
      buttons:[
        {
          text: 'Edit',
          handler: () =>{
            this.editCredetial();
          }
        },
        {
          text: 'Delete',
          handler: () =>{
            this.deleteCredentials();
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

  viewPassword(){
    const alert = this.alertCtrl.create({
      title: 'Your password is',
      subTitle: 'Password',
      message: 'Do not share your password with any suspecious person or with anybody!',
      buttons: ['OK']
    });
    alert.present();
  }


  editCredetial(){
    this.navCtrl.push("EditPasswordPage");
  }

  deleteCredentials(){
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
            
          }
        }
      ]
    });
    confirm.present();
  }

}
