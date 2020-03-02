import { Component, OnInit } from '@angular/core';
import { PopoverPage } from '../../pages/popover/popover.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(40);
  constructor( private PopoverCtlr: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number ){
    console.log('item', valor);

    this.PopoverCtlr.dismiss({
      item: valor
    })
  } 

}
