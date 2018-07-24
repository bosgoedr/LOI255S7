import { HomePage } from './../home/home';

/**
import { SpoedPage } from './../spoed/spoed';
import { MedicijnenPage } from './../medicijnen/medicijnen';
import { DoorverwijzingPage } from './../doorverwijzing/doorverwijzing';
import { EpdPage } from './../epd/epd';
import { BerichtenPage } from './../berichten/berichten';
import { BloedonderzoekPage } from './../bloedonderzoek/bloedonderzoek';
import { ChatPage } from './../chat/chat';
import { ConsultPage } from './../consult/consult';
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  Home(){
    this.navCtrl.push(HomePage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
