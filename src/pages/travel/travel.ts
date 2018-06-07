import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {

  tab:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelPage');
    this.tab = "flight";
  }



  tab_swap(type) {
    this.tab = type;
   }


  back(){
    this.navCtrl.pop();
  }

  search(){
    this.navCtrl.push("SearchlistPage");
  }



}
