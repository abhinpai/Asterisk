
import { ToastController, LoadingController } from "ionic-angular";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceProvider {

    public loading: any;

    constructor(public toastCtrl: ToastController,
    public loadingCtrl: LoadingController){}


    presentToast(message?) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }

    showLoader(message?) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    }

    dismissLoader() {
        this.loading.dismiss();
    }

   
}