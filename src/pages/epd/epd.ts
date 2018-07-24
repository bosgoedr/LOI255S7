import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import { MenuPage } from './../menu/menu';

/**
 * Generated class for the EpdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-epd',
  templateUrl: 'epd.html',
})
export class EpdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Menu() {
    this.navCtrl.push(MenuPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EpdPage');
  }

}
