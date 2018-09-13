import { Component, OnInit } from '@angular/core';
declare var require:any;
@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  companyProfile = require("src/app/company-profile.json");

  constructor() { }

  ngOnInit() {
  }

}
