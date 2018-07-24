import { CalendarModule } from "ion2-calendar";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultePage } from './consulte';

@NgModule({
  declarations: [
    ConsultePage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultePage),CalendarModule
  ],
})
export class ConsultePageModule {}
