import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'isa-ng';
  company_name = "ISA CLEAN"
  user: User;
  date = new Date();
  year = this.date.getFullYear();

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<User>('http://localhost:8000/auth').subscribe(data => {
      console.log(data);
      this.user = data;
    })
  }
}
