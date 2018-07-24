import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import { MenuPage } from './../menu/menu';

/**
 * Generated class for the ConsultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulte',
  templateUrl: 'consulte.html',
})
export class ConsultePage {
  date: string;
  type: 'string';
  
  Menu() {
    this.navCtrl.push(MenuPage)
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onChange($event) {
    console.log($event);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultePage');
  }

}
