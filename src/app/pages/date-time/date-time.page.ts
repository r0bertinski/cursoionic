import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  dob: Date = new Date()
  customPickerOptions;
  customDate;
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event ) => {
          console.log('Clicked Save!');
          console.log('event save', event);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          console.log('event log', event);
          return false;
        }
      }]
    }
  }

 
  cambioFecha( event ){
    console.log('ionChange', event);
    console.log('data', new Date(event.detail.value));

  }

}
