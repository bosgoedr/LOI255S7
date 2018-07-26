import { LokatietelefoonPageModule } from './../pages/lokatietelefoon/lokatietelefoon.module';
import { LokatiePageModule } from './../pages/lokatie/lokatie.module';
import { HuisartsPageModule } from './../pages/huisarts/huisarts.module';
import { SpoedPageModule } from './../pages/spoed/spoed.module';
import { SpoedbelPageModule } from './../pages/spoedbel/spoedbel.module';
import { SpoedvervolgPageModule } from './../pages/spoedvervolg/spoedvervolg.module';
import { MenuPageModule } from './../pages/menu/menu.module';
import { MedicijninfoPageModule } from './../pages/medicijninfo/medicijninfo.module';
import { MedicijnenPageModule } from './../pages/medicijnen/medicijnen.module';
import { EpdPageModule } from './../pages/epd/epd.module';
import { DoorverwijzingPageModule } from './../pages/doorverwijzing/doorverwijzing.module';
import { ConsultePageModule } from './../pages/consulte/consulte.module';
import { ChatPageModule } from './../pages/chat/chat.module';
import { BloedonderzoekPageModule } from './../pages/bloedonderzoek/bloedonderzoek.module';
import { BerichtenPageModule } from './../pages/berichten/berichten.module';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { HomePage } from '../pages/home/home';
// import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // TabsPage
  ],
  imports: [
    BrowserModule,
    SpoedbelPageModule,
    BerichtenPageModule,
    ChatPageModule,
    BloedonderzoekPageModule,
    SpoedvervolgPageModule,
    MenuPageModule,
    MedicijnenPageModule,
    MedicijninfoPageModule,
    EpdPageModule,
    TabsPageModule,
    DoorverwijzingPageModule,
    ConsultePageModule,
    SpoedPageModule,
    HuisartsPageModule,
    LokatiePageModule,
    LokatietelefoonPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
