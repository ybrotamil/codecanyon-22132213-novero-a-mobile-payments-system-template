import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-verified',
  templateUrl: 'verified.html',
})
export class VerifiedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifiedPage');
  }

  home(){
    this.navCtrl.push('TabsPage');
  }

}
