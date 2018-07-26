import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LokatiePage } from './lokatie';

@NgModule({
  declarations: [
    LokatiePage,
  ],
  imports: [
    IonicPageModule.forChild(LokatiePage),
  ],
})
export class LokatiePageModule {}
