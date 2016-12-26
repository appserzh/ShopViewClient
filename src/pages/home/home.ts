import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchString: string = "";
  items: any[] = [];

  constructor() {
    for (let i = 0; i < 10; i ++) {
      this.items.push({
        name: "name",
        iter: i 
      });
    }
  }

  onInput(event: Events): void {
    console.log(event);
  }

  onCancel(event: Events): void {
    console.log(event);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push({
          name: "name",
          iter: i 
        });
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 7000);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  goToDetails(itemId: number) {
    console.log(itemId);
  }
}
