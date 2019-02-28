import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransitionPage } from './transition';

@NgModule({
  declarations: [
    TransitionPage,
  ],
  imports: [
    IonicPageModule.forChild(TransitionPage),
  ],
})
export class TransitionPageModule {}
