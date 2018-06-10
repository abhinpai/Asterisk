
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordDetailsPage');
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


  editCredetial(){

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
