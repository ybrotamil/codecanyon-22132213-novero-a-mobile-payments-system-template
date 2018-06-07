import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-completepayment',
  templateUrl: 'completepayment.html',
})
export class CompletepaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletepaymentPage');
  }

  back(){
    this.navCtrl.pop();
  }

  success(){
    let modal = this.modalCtrl.create('SuccessPage');
    modal.present();
  }

}
