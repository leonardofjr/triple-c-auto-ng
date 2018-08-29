import { Component, OnInit } from '@angular/core';
declare var require: any;


@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {
  content = require('./content.json').whyChooseUs;


  constructor() { }

  ngOnInit() {
   
  }

}
