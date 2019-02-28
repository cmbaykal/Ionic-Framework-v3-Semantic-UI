import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransitionController, Transition, TransitionDirection} from "ng2-semantic-ui";
/**
 * Generated class for the TransitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transition',
  templateUrl: 'transition.html',
})
export class TransitionPage {
  public transitionController = new TransitionController();

  public transitions:string[] = [
      "scale", "fade", "fade up", "fade down",
      "fade left", "fade right", "horizontal flip", "vertical flip",
      "drop", "fly left", "fly right", "fly up",
      "fly down", "swing left", "swing right", "swing up",
      "swing down", "browse", "browse right", "slide left",
      "slide right", "slide up", "slide down", "jiggle",
      "flash", "shake", "pulse", "tada", "bounce"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransitionPage');
  }
  public animate(transitionName:string = "scale") {
    this.transitionController.animate(
        new Transition(transitionName, 500, TransitionDirection.In, () => console.log("Completed transition.")));
}
}
