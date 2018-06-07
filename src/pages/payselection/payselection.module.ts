import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayselectionPage } from './payselection';

@NgModule({
  declarations: [
    PayselectionPage,
  ],
  imports: [
    IonicPageModule.forChild(PayselectionPage),
  ],
})
export class PayselectionPageModule {}
