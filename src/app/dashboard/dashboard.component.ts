import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  // data;

  ngOnInit() {

    // this.http.get("http://192.168.43.124:8080").subscribe(res => {
    //   this.data = res;
    // });
  }

}

