import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//pages
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    DoorverwijzingPageModule,
    ConsultePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
