import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HuisartsPage } from './huisarts';

@NgModule({
  declarations: [
    HuisartsPage,
  ],
  imports: [
    IonicPageModule.forChild(HuisartsPage),
  ],
})
export class HuisartsPageModule {}
