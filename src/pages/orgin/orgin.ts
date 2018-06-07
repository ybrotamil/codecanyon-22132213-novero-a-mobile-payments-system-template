import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-orgin',
  templateUrl: 'orgin.html',
})
export class OrginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrginPage');
  }

  back(){
    this.viewCtrl.dismiss();
  }

}
