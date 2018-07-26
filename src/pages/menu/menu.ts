import { HomePage } from './../home/home';
import { SpoedPage } from './../spoed/spoed';
import { MedicijnenPage } from './../medicijnen/medicijnen';
import { DoorverwijzingPage } from './../doorverwijzing/doorverwijzing';
import { EpdPage } from './../epd/epd';
import { BerichtenPage } from './../berichten/berichten';
import { BloedonderzoekPage } from './../bloedonderzoek/bloedonderzoek';
import { ChatPage } from './../chat/chat';
import { ConsultePage } from './../consulte/consulte';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController  } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController ) {
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  openSpoed(){
    this.navCtrl.push(SpoedPage);
  }

  openChat(){
    this.navCtrl.push(ChatPage);
  }

  openConsulte(){
    this.navCtrl.push(ConsultePage);
  }

  openDoorverwijzing(){
    this.navCtrl.push(DoorverwijzingPage);
  }

  openBloedonderzoek(){
    this.navCtrl.push(BloedonderzoekPage);
  }

  openBerichten(){
    this.navCtrl.push(BerichtenPage);
  }

  openEpd(){
    this.navCtrl.push(EpdPage);
  }
  
  openMedicijnen(){
    this.navCtrl.push(MedicijnenPage);
  }
   
  Home(){
   const loader = this.loadingCtrl.create({
      content: "Bezig met afmelden...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loader.present();

    window.location.reload();

    setTimeout(() => {
    this.navCtrl.setRoot(HomePage);
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
