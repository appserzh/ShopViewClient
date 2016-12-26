import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    username: string;
    password: string;

    constructor(private nav: NavController) {
    }

    login() {
      this.nav.setRoot(HomePage);
    }
}