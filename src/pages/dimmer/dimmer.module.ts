import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DimmerPage } from './dimmer';

@NgModule({
  declarations: [
    DimmerPage,
  ],
  imports: [
    IonicPageModule.forChild(DimmerPage),
  ],
})
export class DimmerPageModule {}
