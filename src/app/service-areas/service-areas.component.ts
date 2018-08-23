import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-areas',
  templateUrl: './service-areas.component.html',
  styleUrls: ['./service-areas.component.css']
})
export class ServiceAreasComponent implements OnInit {
  assetsPath = './assets/';
  serviceAreas = [
    { name: 'Markham', text: 'As far as our janitorial service in Markham is concerned, ISA CLEAN always has your satisfaction in mind, which is why we aim to provide you with the best results. Regardless as to the type of business or setting you require janitorial services for, ISA CLEAN is prepared to take care of all your cleaning needs! We are committed to getting rid of any dirt, grime, and trash that keeps your commercial location from being squeaky clean! When you want a fresh, clean location every day, you can trust in the janitorial services in Markham provided by ISA CLEAN.', img: this.assetsPath + 'markham-cleaning-services.gif'},
    { name: 'Richmond Hill', text: 'Have you been on the hunt for the best janitorial service company in Richmond Hill? Why not try the leading company for janitorial services and commercial cleaning and janitorial services in Richmond Hill. After turning to ISA CLEAN you will be so impressed that you won’t be satisfied by the work of any other cleaning company!', img: this.assetsPath + 'richmond-hill-cleaning-services.gif'},
    { name: 'Toronto', text: 'All other companies with commercial cleaning services in Toronto fail in comparison to ISA CLEAN. What sets ISA CLEAN apart from the competition? Our customer service and close attention to detail is simply unlike any other company. Our customers are our priority, which is why we strive to provide each of our clients with the best results. Cleaning any location should be comprehensive and detailed, and that is exactly what we are committed to at ISA CLEAN.', img: this.assetsPath + 'toronto-cleaning-services.gif'},
];

  constructor() { }

  ngOnInit() {
  }

}
