import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  origin(){
    let modal = this.modalCtrl.create('OrginPage');
    modal.onDidDismiss(data => {
    });
    modal.present();
  }

  mobprepaid()
  {
    this.navCtrl.push('MobprepaidPage');
  }

  electricitybill()
  {
    this.navCtrl.push('ElectricitybillPage');
  }

  fashionstore()
  {
    this.navCtrl.push('FashionstorePage');
  }

  travel()
  {
    this.navCtrl.push('TravelPage');
  }



}
