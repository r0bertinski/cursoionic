import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(70);
  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('cargando datos...');
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 400) {
        event.target.disabled = true;
      }
    }, 1000);
  }

}
