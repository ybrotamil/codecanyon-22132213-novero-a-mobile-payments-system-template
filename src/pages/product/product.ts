import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Content,Slides, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

showPrev:any;
showNext:any;
currentIndex:any;
count:any;

 @ViewChild(Content) content: Content;
 @ViewChild('mySlider') slider: Slides;

 slidertab:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let id = this.navParams.get("id");
    this.slidertab = id;
    console.log("id", id);
    setTimeout(() => {
    this.goToSlide(id);

    }, 500)

    this.slidertab = 0;
   this.currentIndex = 0;
   this.count = 0;
  }

  goToSlide(id) {
    this.slider.slideTo(id, 500);
  }

  slideChanged() {
   let currentIndex = this.slider.getActiveIndex();
   this.slidertab = currentIndex;
   console.log("Current index is", currentIndex);

 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
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

  addcart(){
    this.navCtrl.push("AddcartPage");
  }

}
