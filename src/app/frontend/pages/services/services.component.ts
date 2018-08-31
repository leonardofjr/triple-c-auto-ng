import { Component, OnInit } from '@angular/core';
declare var require:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = require('./content.json');
  constructor() { }

  ngOnInit() {
  }

}
