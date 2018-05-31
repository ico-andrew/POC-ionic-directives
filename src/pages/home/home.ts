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

  todo = {
    title: '',
    description: ''
  };
  logForm(form) {
    console.log(form);
    console.log(form.valid);
    console.log(form.invalid);
    console.log(form.value);
    console.log(form.submitted);
    console.log("### title errors");
    console.log(form.controls.title.errors);
    console.log(form.controls.title.invalid);
    console.log(form.controls.title.valid);
    
  }

}
