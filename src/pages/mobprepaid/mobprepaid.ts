import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-mobprepaid',
  templateUrl: 'mobprepaid.html',
})
export class MobprepaidPage {
  tab:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobprepaidPage');
    this.tab = "active";
  }

  back(){
    this.navCtrl.pop();
  }

  tab_swap(type) {
    this.tab = type;
   }

   proceed(){
     this.navCtrl.push('MobproceedPage');
   }

}
