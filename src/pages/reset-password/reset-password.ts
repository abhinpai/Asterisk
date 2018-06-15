import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  logo: any;
  images: any;
  name: any;

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams) {

    this.initialize();
  }


  initialize(){
    this.http.get('assets/logos.json')
    .subscribe(res =>{
      this.images = res;
      
    })
    this.logo = '';
  }

  setImage(ev: any){
    this.initialize();
    const val = ev.value;
    
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].name == val || this.images[i].subname == val) {
        this.logo = this.images[i].path
      }
    } 
  }
}
