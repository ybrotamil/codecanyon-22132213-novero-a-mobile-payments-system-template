import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  verify()
  {
    this.navCtrl.push('VerifyPage')
  }

  signup()
  {
    this.navCtrl.push('SignupPage')
  }


  forgot(){
    let modal = this.modalCtrl.create('ForgotPage');
    modal.present();
  }

}
