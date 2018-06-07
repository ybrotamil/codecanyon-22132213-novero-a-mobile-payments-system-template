import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-boardinginfo',
  templateUrl: 'boardinginfo.html',
})
export class BoardinginfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardinginfoPage');
  }

  book(){
    let modal = this.modalCtrl.create('SuccessPage');
    modal.present();
  }

}
