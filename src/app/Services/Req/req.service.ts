import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ReqService {

  constructor(
    private toastCtrl: ToastController,
  ) { }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });
    toast.present();
  }
}
