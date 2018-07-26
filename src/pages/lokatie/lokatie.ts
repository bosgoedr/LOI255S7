import { LokatietelefoonPage } from './../lokatietelefoon/lokatietelefoon';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LokatiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lokatie',
  templateUrl: 'lokatie.html',
})
export class LokatiePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  lokatieTelClick() {
    console.log('test');
    this.navCtrl.push(LokatietelefoonPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LokatiePage');
  }

}
