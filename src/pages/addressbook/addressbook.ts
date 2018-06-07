import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-addressbook',
  templateUrl: 'addressbook.html',
})
export class AddressbookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressbookPage');
  }

  back(){
    this.navCtrl.pop();
  }

  addaddress() {
    let modal = this.modalCtrl.create("AddaddressPage");
    modal.present();
  }

}
