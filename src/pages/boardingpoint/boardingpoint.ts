import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-boardingpoint',
  templateUrl: 'boardingpoint.html',
})
export class BoardingpointPage {
  tab:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardingpointPage');
    this.tab = "active";
  }

  tab_swap(type) {
    this.tab = type;
   }

  back(){
    this.viewCtrl.dismiss();
  }

}
