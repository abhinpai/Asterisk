import { BankDBServiceProvider } from './../services/bank-db.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SystemService } from '../../../Core/services/system.service';
import { Helper } from '../../../Core/services/helper.service';

@IonicPage()
@Component({
  selector: 'page-add-bank',
  templateUrl: 'add-bank.html',
})
export class AddBankPage {

  // overlayHidden: boolean = false;

  today = new Date().toISOString();
  document_object: any;

  bankData = {
    bank: '',
    bank_logo: '',
    ac_holder_name: '',
    ac_no: '',
    ifsc: '',
    nomine: '',
    phone: '',
    email: '',
    address: '',
    primary_no: '',
    secondary_no: '',
    fax: '',
    bank_email: '',
    documents: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  bank_logos: any;

  constructor(public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient,
    public helper: Helper,
    public bankService: BankDBServiceProvider,
    public systemService: SystemService,
    public actionCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.initializeBankLogo();
  }

  initializeBankLogo() {
    this.http.get('assets/bank.json')
      .subscribe(res => {
        this.bank_logos = res;
        console.log(this.bank_logos);
        
      });

    this.bankData.bank_logo = localStorage.getItem('ErrorPhoto');
  }

  setBankLogo(ev: any) {
    this.initializeBankLogo();
    let val = ev.value.toLowerCase();
    val = val.replace(/\s/g, "");
    for (let i = 0; i < this.bank_logos.length; i++) {
      if (this.bank_logos[i].name.toLowerCase() == val || this.bank_logos[i].primary_name.toLowerCase() == val || this.bank_logos[i].secondary_name.toLowerCase() == val) {
        this.bankData.bank_logo = this.bank_logos[i].path
      }
    }
  }

  addBank() {
    console.log(this.bankData);

    this.bankService.addBank(this.bankData)
    .then(() =>{
      this.helper.presentToast("Account details has been added successfully.");
      this.navCtrl.pop();
    }).catch(e => alert(e));
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

    self.systemService.getImageFromGallery([], 1, function (path) {
      console.log(path);
      self.document_object = path[0].display_url;
    });
  }

  viewPhoto() {
    this.photoViewer.show(this.document_object);
  }

  removePhoto() {
    this.document_object = null;
  }


}
