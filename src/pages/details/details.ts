import { Component } from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-detail',
    templateUrl: 'details.html'
})
export class DetailPage {

    test:string = "dsfd";

    constructor(public nav: NavController, public params: NavParams) {
        console.log(params);
        setTimeout(() => {
            this.test = "123";
        }, 7000);
    }
}