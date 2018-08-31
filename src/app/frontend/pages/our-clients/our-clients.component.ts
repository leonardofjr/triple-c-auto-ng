import { Component, OnInit } from '@angular/core';
declare var require:any;
@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  assetsPath = './assets/';
  content = require("./content.json");
 
  constructor() { }

  ngOnInit() {
  }

}
