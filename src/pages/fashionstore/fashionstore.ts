import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fashionstore',
  templateUrl: 'fashionstore.html',
})
export class FashionstorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FashionstorePage');
  }
  back(){
    this.navCtrl.pop();
  }
  product(){
    this.navCtrl.push('ProductPage');
  }

  seemore()
  {
    this.navCtrl.push('ResultPage');
  }

}
