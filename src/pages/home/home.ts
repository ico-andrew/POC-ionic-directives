import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DirectivesModule } from '../../directives/directives.module'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
