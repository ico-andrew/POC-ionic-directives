import { Component, Injector } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DirectivesModule } from '../../directives/directives.module'
import { PopupContentService } from '../../providers-v2/popup-content/popup-content'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private popupSvc: PopupContentService;

  accList = [
    { id:1, value:'123123123', text:'123-123-123'},
    { id:7, value:'777777777', text:'777-777-777'}
  ];

  constructor(injector: Injector, 
            public navCtrl: NavController) {
    
    this.popupSvc = injector.get(PopupContentService);
  }

  popup() {
    let ret = this.popupSvc.present(this.accList, this.popupCallback);

  }  

  popupCallback(data) {
    console.log("return: " + data);
  }

  todo = {
    title: '',
    description: '',
    testdropdown: ''
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
