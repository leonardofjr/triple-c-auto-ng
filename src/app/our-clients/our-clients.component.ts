import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent implements OnInit {
  assetsPath = './assets/';
  clientLogos = [
  {
    img: this.assetsPath + "jenkins-logo.gif",
    altText: "",
  }, 
  {
  img: this.assetsPath + "rogers-logo.gif",
  altText: "",
  }, 
  {
    img: this.assetsPath + "bose-logo.gif",
    altText: "",
  },
  {
    img: this.assetsPath + "william-scottsman-logo.gif",
    altText: "",
  },
  {
    img: this.assetsPath + "country-style-logo.gif",
    altText: "",
  },
  {
    img: this.assetsPath + "fundeco-logo.gif",
    altText: "",
  },
  {
    img: this.assetsPath + "safari-kid-logo.gif",
    altText: "",
  },
  {
    img: this.assetsPath + "little-caesars-logo.gif",
    altText: "",
  },
];
  constructor() { }

  ngOnInit() {
  }

}
