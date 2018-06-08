import { Injector, Component, Input, Output, OnInit, OnChanges} from '@angular/core'
import { Renderer } from '@angular/core'
import { ModalController, NavParams, ViewController } from 'ionic-angular'
import { PopupContentService } from '../../providers-v2/popup-content/popup-content'
import { NgForm, NgModel } from '@angular/forms'


@Component({
    selector:"click-popup",
    templateUrl: "click-popup.html"
})
export class ClickPopupComponent implements OnInit, OnChanges {
    
    @Input() buttonText: any;
    @Input() buttonLabel: any;
    
    @Input() popupTitleText:any;
    @Input() dataListDisplayAttr:String;
    @Input() dataListValueAttr:String;
    @Input() dataList: any =[];
    @Input() callback: Function;
    @Input() ngModel: NgModel;

    private popupSvc: PopupContentService;


    constructor(injector: Injector) {
        console.log("constructor data list:" + this.dataList);
        this.popupSvc = injector.get(PopupContentService);
    }

    ngOnInit(){
        console.log("On Init data list:" + this.dataList +"|");
        
        
    }

    ngOnChanges(){
        console.log("On Change data list:" + this.dataList + "|" + this.callback);
        console.log(this.ngModel);
        console.log("-----------------------");
    }

    popup() {
        let component = this;
        console.log("Popup data list:" + this.dataList);
        let ret = this.popupSvc.present(this.dataList, this.popupTitleText, this.popupCallback, component);
    
    }  

    popupCallback(data, component) {
        if (data) {
            component.buttonText = data[component.dataListDisplayAttr];
            component.buttonValue = data[component.dataListValueAttr];
        }
        if (component.callback) {
            component.callback();
        }
    }



}