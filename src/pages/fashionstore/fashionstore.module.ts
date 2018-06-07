import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FashionstorePage } from './fashionstore';

@NgModule({
  declarations: [
    FashionstorePage,
  ],
  imports: [
    IonicPageModule.forChild(FashionstorePage),
  ],
})
export class FashionstorePageModule {}
