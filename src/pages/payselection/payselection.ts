import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-payselection',
  templateUrl: 'payselection.html',
})
export class PayselectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayselectionPage');
  }

  transfer(){
    this.navCtrl.push('TransferPage');
  }

  transferfriend(){
    this.navCtrl.push('TransferfriendPage');
  }

  back(){
    this.navCtrl.pop();
  }

}
