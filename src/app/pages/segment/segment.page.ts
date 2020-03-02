import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment,  {static: true}) segment: IonSegment; // especificando el tipo tenemos acceso a las ayudas, autocompletado ...

  superHeroes: Observable<any>;
  publisher = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
    console.log('superHeroes',  this.superHeroes);
  }

  segmentChanged( ev ){
    const valorSegmento = ev.detail.value;
    console.log( valorSegmento );

    if ( valorSegmento === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valorSegmento;
  }
}
