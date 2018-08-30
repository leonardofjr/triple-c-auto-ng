import { Component, OnInit } from '@angular/core';
declare var require:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  ourCoreValues = require('./content-our-core-values.json').ourCoreValues;
  whyChooseUs = require('./content-why-choose-us.json').whyChooseUs;
  constructor() { }

  ngOnInit() {
  }

}
