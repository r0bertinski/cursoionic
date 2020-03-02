import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flasg', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ) {
    // console.log('event', event);

    // Elimina el elemento de la posicion from y lo recupera en la const itemMover.
    const itemMover = this.personajes.splice( event.detail.from, 1 ) [0];

    // Agregar el elemento a la posicion to
    this.personajes.splice( event.detail.to, 0, itemMover );
    event.detail.complete();
  }

  onClick(){
    console.log( this.personajes );
  }
}
