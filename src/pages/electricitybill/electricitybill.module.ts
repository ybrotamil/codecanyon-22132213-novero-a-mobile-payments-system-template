import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectricitybillPage } from './electricitybill';

@NgModule({
  declarations: [
    ElectricitybillPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectricitybillPage),
  ],
})
export class ElectricitybillPageModule {}
