import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-seat',
  templateUrl: 'seat.html',
})
export class SeatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeatPage');
  }

  back(){
    this.viewCtrl.dismiss();
  }





  boarding() {
    let modal = this.modalCtrl.create("BoardingpointPage");
    modal.present();
  }



}
