import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
    selector: 'user-avatar',
    template: `
      <img class="user-avatar"  src="{{profilePhoto}}">
      <span *isPresentNotification class="notification-alert"></span>`
})

export class UserAvatarComponent {

    isPresent: boolean;

    profilePhoto: any = localStorage.getItem('ProfilePhoto');

    constructor(public navCtrl: NavController,
    public events: Events) { 
        
        this.events.subscribe('update-profile-photo', data =>{
            this.profilePhoto = localStorage.getItem('ProfilePhoto');
        });
    }

}