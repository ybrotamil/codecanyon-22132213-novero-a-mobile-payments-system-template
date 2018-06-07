import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-promomodal',
  templateUrl: 'promomodal.html',
})
export class PromomodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromomodalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
    this.navCtrl.push('CompletepaymentPage');
  }



}
