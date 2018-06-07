import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mobproceed',
  templateUrl: 'mobproceed.html',
})
export class MobproceedPage {
  tab:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobproceedPage');
    this.tab = "active";
  }

  back(){
    this.navCtrl.pop();
  }

  tab_swap(type) {
    this.tab = type;
   }

   promo(){
    let modal = this.modalCtrl.create('PromomodalPage');
    modal.present();
  }

}
