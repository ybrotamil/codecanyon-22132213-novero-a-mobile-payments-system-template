import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  tab:any;

  @ViewChild(Content) content: Content;
   scrollPosition: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
    this.tab = "all";
  }

  tab_swap(type) {
    this.tab = type;
   }

  ngAfterViewInit() {
 }

 pay(){
   this.navCtrl.push('PayselectionPage');
 }



}
