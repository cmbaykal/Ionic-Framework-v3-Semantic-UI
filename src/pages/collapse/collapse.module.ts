import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollapsePage } from './collapse';

@NgModule({
  declarations: [
    CollapsePage,
  ],
  imports: [
    IonicPageModule.forChild(CollapsePage),
  ],
})
export class CollapsePageModule {}
