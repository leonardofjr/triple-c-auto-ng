import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  companyProfile = require("src/app/company-profile.json");
  currentRoute;
  content = require("./content.json");
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url; 
  }

}
