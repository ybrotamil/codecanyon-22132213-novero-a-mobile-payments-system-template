import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountdetailsPage } from './accountdetails';

@NgModule({
  declarations: [
    AccountdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountdetailsPage),
  ],
})
export class AccountdetailsPageModule {}
