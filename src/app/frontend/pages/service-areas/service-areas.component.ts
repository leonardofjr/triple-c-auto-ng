import { Component, OnInit } from '@angular/core';
declare var require:any;
@Component({
  selector: 'app-service-areas',
  templateUrl: './service-areas.component.html',
  styleUrls: ['./service-areas.component.css']
})
export class ServiceAreasComponent implements OnInit {
  assetsPath = './assets/';
  content = require("./content.json");
  constructor() { }

  ngOnInit() {
  }

}
