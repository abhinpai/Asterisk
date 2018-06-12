import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'user-avatar',
    template: `
      <img class="user-avatar" src="https://cdn0.iconfinder.com/data/icons/superhero-2/256/Batman-512.png">
      <span *isPresentNotification class="notification-alert"></span>`
})

export class UserAvatarComponent {
   
    isPresent: boolean;

    constructor(public navCtrl: NavController) {}

    checkNotification(){}
}