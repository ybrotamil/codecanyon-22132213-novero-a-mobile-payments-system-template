import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-favourate',
  templateUrl: 'favourate.html',
})
export class FavouratePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouratePage');
  }

  product(){
    this.navCtrl.push("ProductPage");
  }

  back(){
    this.navCtrl.pop();
  }

}
