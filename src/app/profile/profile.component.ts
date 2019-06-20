import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../login/login.component";
// import { AppComponent } from "../app.component";
// import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(public ap: LoginComponent) {}
  userid;
  ngOnInit() {
    // console.log(this.ap.status);
    // this.userid = this.ap.status;
  }
  view() {
    alert(this.ap.status);
  }
}
