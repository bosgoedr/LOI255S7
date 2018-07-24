import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import { MenuPage } from './../menu/menu';

/**
 * Generated class for the BerichtenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berichten',
  templateUrl: 'berichten.html',
})
export class BerichtenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Menu() {
    this.navCtrl.push(MenuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerichtenPage');
  }

}
