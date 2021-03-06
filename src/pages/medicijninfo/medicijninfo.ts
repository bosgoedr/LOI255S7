import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the MedicijninfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicijninfo',
  templateUrl: 'medicijninfo.html',
})
export class MedicijninfoPage {
  Medicijn = this.navParams.get('data');

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    //const data = this.navParams.get('data');
    console.log('ionViewDidLoad MedicijninfoPage');
  }

  closeModal(){
    this.view.dismiss();
  }
}
