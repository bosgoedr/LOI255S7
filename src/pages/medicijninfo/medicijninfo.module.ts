import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicijninfoPage } from './medicijninfo';

@NgModule({
  declarations: [
    MedicijninfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicijninfoPage),
  ],
})
export class MedicijninfoPageModule {}
