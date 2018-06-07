import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-searchlist',
  templateUrl: 'searchlist.html',
})
export class SearchlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchlistPage');
  }

  filter() {
    let modal = this.modalCtrl.create("FilterPage");
    modal.present();
  }

  seat() {
    let modal = this.modalCtrl.create("SeatPage");
    modal.present();
  }



  back(){
    this.navCtrl.pop();
  }

}
