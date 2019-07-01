import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as jwt_decode from 'jwt-decode';
//import { LoginComponent } from "../login/login.component";
// import { AppComponent } from "../app.component";
// import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}
  token;
  data;
  uname;
  ucity;
  umobile;
  uid;
  allevents;
  userid;
  count;
  ngOnInit() {
    
    this.getToken();

    this.http.get("http://localhost:8000/get_userProfile",{
      headers : {"authorization" : "bearer " + this.token}
    }).subscribe(res => {
      this.uid = res["user1"].username;
      this.ucity = res["user1"].city;
      this.umobile = res["user1"].mobile;
      this.uname = res["user1"].name;
      this.allevents=res["user1"].addedEvents;
      console.log(this.allevents);
    });
    
  }

  getToken(){
    this.token=document.cookie.split("=")[1];
    console.log(this.token);
  }
  
  deleteEvent(e)
  {
    //this is working?yep
  //   console.log(e);
  //   this.http.post("http://localhost:8000/delete_event",{eventid : e}).subscribe(res=>{
  // });,


    this.userid=jwt_decode(this.token)['_id'];
    console.log(this.userid);


  this.http.post("http://localhost:8000/delete_event",{eventid : e, userid : this.userid}
    ).subscribe();
   setTimeout(()=>window.location.reload(),1000);
 
   }
  
}
