import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private PopoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( ev ){

    const popover = await this.PopoverCtrl.create({
      component: PopinfoComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: false
      // translucent: true
    });
    await popover.present();

    // const { data } = await popover.onDidDismiss(); // Una vez cerrado
    const { data } = await popover.onWillDismiss(); // Apunto de cerrarse

    console.log('Padre:', data);
  }
}
