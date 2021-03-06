import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje = 0.05;
  constructor() { }

  ngOnInit() {
  }

  rangeChange( ev ){
    // console.log('evento', ev);
    this.porcentaje = ev.detail.value / 100;
    console.log('current porcentaje', this.porcentaje)
  }
}
