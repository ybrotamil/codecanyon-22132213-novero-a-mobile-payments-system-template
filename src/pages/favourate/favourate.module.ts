import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouratePage } from './favourate';

@NgModule({
  declarations: [
    FavouratePage,
  ],
  imports: [
    IonicPageModule.forChild(FavouratePage),
  ],
})
export class FavouratePageModule {}
