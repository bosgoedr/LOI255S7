import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 MenuPage = MenuPage;
 
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  alertCode() {
    const alert = this.alertCtrl.create({
      title: 'Code vergeten',
      subTitle: 'Controleer uw email voor het wijzigen van uw beveiligings code',
      buttons: ['OK']
    });
    alert.present();
  }
}
