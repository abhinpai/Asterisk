
import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, Platform } from 'ionic-angular';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-onboard',
  templateUrl: 'onboard.html',
})

export class OnboardPage {

  slides: Slide[];
  showSkip = true;

  constructor(public menu: MenuController, 
    public navCtrl: NavController,
    public platform: Platform) {


    this.slides = [
      {
        title: 'Know your Family',
        description: 'Reach out to your family members for quick chats at your finger tips',
        image: '',

      },
      {
        title: 'Shoutout to your Family',
        description: 'Now make sure important events of your life are heard by every family member',
        image: '',

      }

    ];
  }

  goToSignUpPage(){
    this.navCtrl.setRoot("SignupPage", {}, {
      animate: true,
      direction: 'forward',
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }


}
