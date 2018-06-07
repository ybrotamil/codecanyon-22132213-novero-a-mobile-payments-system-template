import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchlistPage } from './searchlist';

@NgModule({
  declarations: [
    SearchlistPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchlistPage),
  ],
})
export class SearchlistPageModule {}
