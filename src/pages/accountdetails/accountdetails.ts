import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-accountdetails',
  templateUrl: 'accountdetails.html',
})
export class AccountdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountdetailsPage');
  }
  back(){
    this.navCtrl.pop();
  }

addcard() {
    let Modal = this.modalCtrl.create('AddcardPage');
    Modal.present();
  }

}
