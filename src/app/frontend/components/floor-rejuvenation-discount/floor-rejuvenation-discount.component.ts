import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-rejuvenation-discount',
  templateUrl: './floor-rejuvenation-discount.component.html',
  styleUrls: ['./floor-rejuvenation-discount.component.scss']
})
export class FloorRejuvenationDiscountComponent implements OnInit {
  currentRoute;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url; 

  }

}
