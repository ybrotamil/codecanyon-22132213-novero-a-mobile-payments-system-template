import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transferfriend',
  templateUrl: 'transferfriend.html',
})
export class TransferfriendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferfriendPage');
  }

  back(){
    this.navCtrl.pop();
  }

  accountdetails(){
    this.navCtrl.push('AccountdetailsPage');
  }

}
