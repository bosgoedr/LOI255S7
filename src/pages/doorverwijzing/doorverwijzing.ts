import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import { MenuPage } from './../menu/menu';

/**
 * Generated class for the DoorverwijzingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doorverwijzing',
  templateUrl: 'doorverwijzing.html',
})
export class DoorverwijzingPage {
  items: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Menu() {
    this.navCtrl.push(MenuPage);
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['dr Baarn', 'dr Greven', 'dr Janssen', 'dr Prik'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoorverwijzingPage');
  }

}
