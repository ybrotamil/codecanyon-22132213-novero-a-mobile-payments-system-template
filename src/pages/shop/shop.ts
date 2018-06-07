import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  shownGroup = null;
  count:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.count = 0;
    this.shownGroup = 0;
  	console.log(this.shownGroup);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  }

  add(){
    this.count = this.count + 1;
  }

  sub(){
    this.count = this.count - 1;
  }

}
