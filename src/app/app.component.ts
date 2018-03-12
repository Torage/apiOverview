import { Component } from '@angular/core';
declare const require: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Api Overview';
  apiData = require('../api.json');

  justATest() {
    console.log(this.apiData);
  }
}

