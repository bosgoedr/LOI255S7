import { SpoedvervolgPage } from './../spoedvervolg/spoedvervolg';
import { SpoedbelPage } from './../spoedbel/spoedbel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
//pages
import { MenuPage } from './../menu/menu';


/**
 * Generated class for the SpoedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spoed',
  templateUrl: 'spoed.html',
})
export class SpoedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  Menu() {
    this.navCtrl.push(MenuPage);
  }
  
 SpoedClick() {
    this.navCtrl.push(SpoedbelPage);
  }

  SpoedVervolg() {
    this.navCtrl.push(SpoedvervolgPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpoedPage');
  }

  alertSpoed() {
    let alert = this.alertCtrl.create({
      title: 'Let op!!!',
      subTitle: 'U staat op het punt een noodoproep te doen. Misbruik resulteert in uitschakeling van deze functie.',
      buttons: [
        {
          text: 'LEVENSBEDREIGENDE SITUATIE',
          handler: () => {
            this.navCtrl.push(SpoedbelPage);
          }
        },
        {
          text: 'NIET LEVENSBEDREIGEND, MAAR WEL SPOEDEISEND',
          handler: () => {
            this.navCtrl.push(SpoedvervolgPage);
            }
          }        
        ]
    });
    alert.present();
  }
}
