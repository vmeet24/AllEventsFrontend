import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "../app.component";
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, private ap: AppComponent) {

  }
  data;
  role;
  current_id;
  userid;
  disablebtn={};
  intEvent;
  useridnew=jwt_decode(document.cookie)['_id'];
  ngOnInit() {

    this.userid=jwt_decode(document.cookie)['_id'];
    this.http.post("http://localhost:8000/get_all_events",{userid:this.userid}).subscribe(res => {
      this.data = res["result1"];
      this.intEvent = res["intEvent"];
      console.log(this.data);
      console.log(this.intEvent);
    
});

  
  }
   interested(e)
  {
    // let x=<HTMLInputElement>document.getElementById("btn");
    // x.disabled=true;
    this.userid=jwt_decode(document.cookie)['_id'];
    console.log(this.userid);
    
    console.log(e);
    this.http.post("http://localhost:8000/intrested_user",{eventid:e,userid : this.userid}).subscribe(res=>{
    console.log(res);
      
    })
  }
}



// }
