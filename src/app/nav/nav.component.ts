import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    document.cookie = "token=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    window.location.href="/login"
    console.log("hello ladies");
  }
  
  
}
