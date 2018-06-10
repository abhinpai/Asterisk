import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'user-avatar',
    template: `
      <img class="user-avatar" src="assets/imgs/ironman.png">
      <span class="notification-alert"></span>`
})

export class UserAvatarComponent {
   
    isPresent: boolean;

    constructor(public navCtrl: NavController) {}

    checkNotification(){}
}