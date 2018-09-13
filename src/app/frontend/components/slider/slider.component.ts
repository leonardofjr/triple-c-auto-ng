import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  companyProfile = require("src/app/company-profile.json");
  constructor() { }

  ngOnInit() {
  }

}
