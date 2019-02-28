import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DropdownPage } from './dropdown';

@NgModule({
  declarations: [
    DropdownPage,
  ],
  imports: [
    IonicPageModule.forChild(DropdownPage),
  ],
})
export class DropdownPageModule {}
