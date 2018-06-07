import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'OrdersPage';
  tab3Root = 'WalletPage';
  tab4Root = 'ShopPage';
  tab5Root = 'ProfilePage';

  constructor() {

  }
}
