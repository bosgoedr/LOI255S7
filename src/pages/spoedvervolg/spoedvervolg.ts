import { LokatiePage } from './../lokatie/lokatie';
import { HuisartsPage } from './../huisarts/huisarts';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpoedvervolgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spoedvervolg',
  templateUrl: 'spoedvervolg.html',
})
export class SpoedvervolgPage {

  huisartsClick() {
    console.log('test');
    this.navCtrl.push(HuisartsPage);
  }

  lokatieClick() {
    console.log('test');
    this.navCtrl.push(LokatiePage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpoedvervolgPage');
  }

}
