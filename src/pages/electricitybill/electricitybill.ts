import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-electricitybill',
  templateUrl: 'electricitybill.html',
})
export class ElectricitybillPage {
  tab:any;
  tab1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectricitybillPage');
    this.tab = "active";
    this.tab1 = "active1";
  }

  back(){
    this.navCtrl.pop();
  }

  tab_swap(type) {
    this.tab = type;
   }

   tab_swap1(type) {
    this.tab1 = type;
   }

   proceed(){
     this.navCtrl.push('MobproceedPage');
   }

   promo(){
    let modal = this.modalCtrl.create('PromomodalPage');
    modal.present();
  }

}
