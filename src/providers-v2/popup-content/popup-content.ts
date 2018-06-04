import { Injectable, Component } from '@angular/core'
import { Renderer } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Injectable()
export class PopupContentService {
    
    constructor(private ctrl: ModalController) {

    }

    present(inputs, callback) {
        
        let pop = this.ctrl.create(PopupContent, {label1:'Please select', inputs:inputs});
        let selectedId;
        console.log(inputs)
        pop.onDidDismiss(data=>{
            selectedId = data;
            console.log("selected id:" + selectedId);
            callback(selectedId);
        });
        pop.present();
    }

}

@Component({
    selector: 'popup',
    templateUrl: 'popup-content.html'
})
export class PopupContent {

    public label1;
    public inputs;
    constructor(
        params: NavParams,
        public renderer: Renderer,
        public viewCtrl: ViewController
      ) {
        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'popup-content', true);
        this.label1 = params.get('label1');
        this.inputs = params.get('inputs');
        //console.log('UserId', params.get('inputs'));
      }

    dismiss(selectedId) {
       console.log(selectedId);
        this.viewCtrl.dismiss(selectedId);
        //console.log(data);
    }
}