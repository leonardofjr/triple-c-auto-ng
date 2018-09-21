import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-maintenance',
  templateUrl: './floor-maintenance.component.html',
  styleUrls: ['./floor-maintenance.component.scss']
})
export class FloorMaintenanceComponent implements OnInit {
  currentRoute;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }


}
