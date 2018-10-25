import { Component, OnInit } from '@angular/core';

declare var require: any;
@Component({
  selector: 'app-primary-menu',
  templateUrl: './primary-menu.component.html',
  styleUrls: ['./primary-menu.component.scss']
})
export class PrimaryMenuComponent implements OnInit {
  content = require('../../../../menu.json')
  constructor() { }

  ngOnInit() {
  }

}
