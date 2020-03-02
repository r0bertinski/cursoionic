import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;
  users: Observable<any>;
  constructor(private dataService: DataService, private toasstCtrl: ToastController) { }

  ngOnInit() {
    // this.dataService.getUsers().subscribe(console.log);
    this.users = this.dataService.getUsers();
  }


  async presentToast( message: string ) {
    const toast = await this.toasstCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite( user ){
    console.log('favorite', user);
    this.presentToast('Guardo en favoritos');
    this.lista.closeSlidingItems();
  }

  share( user ){
    console.log('share', user);
    this.presentToast('Compartido en favoritos');
    this.lista.closeSlidingItems();

  }

  borrar( user ){
    console.log('borrar', user);
    this.presentToast('Borrado');

    this.lista.closeSlidingItems();

  }

}
