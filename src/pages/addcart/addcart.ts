import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addcart',
  templateUrl: 'addcart.html',
})
export class AddcartPage {

  count:any;
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.count = 0;
    this.shownGroup = 0;
  	console.log(this.shownGroup);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcartPage');
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

  back(){
    this.navCtrl.pop();
  }

  add(){
    this.count = this.count + 1;
  }

  sub(){
    this.count = this.count - 1;
  }

}
