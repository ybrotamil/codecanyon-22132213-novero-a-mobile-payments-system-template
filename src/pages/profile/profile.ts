import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editprofile(){
    let modal = this.modalCtrl.create('EditprofilePage');
    modal.present();
  }

  logout(){
    this.navCtrl.push('LoginPage')
  }

  changepass(){
    this.navCtrl.push('ChangepasswordPage')
  }

  address(){
    this.navCtrl.push("AddressbookPage")
  }
}
