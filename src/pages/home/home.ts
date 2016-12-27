import { Component } from '@angular/core';
import { Events, NavController, MenuController } from 'ionic-angular';
import { DetailPage } from '../details/details';
import { IdentifyDto } from '../../dto/IdentifyDto'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchString: string = "";
  items: any[] = [];
  hideFilterBar:boolean = true;

  constructor(private nav: NavController, private menu: MenuController) {
    menu.enable(true);
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
    let idDto: IdentifyDto = new IdentifyDto();
    idDto.Id = itemId;
    this.nav.push(DetailPage, idDto);
  }

  toogleFilterBar() {
    this.hideFilterBar = ! this.hideFilterBar;
  }
}
