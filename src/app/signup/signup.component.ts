import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient) {}
  username;
  password;
  city;
  status;

  ngOnInit() {}

  signup() {
    this.http
      .post("http://192.168.2.3:8000/signup", {
        username: this.username,
        password: this.password,
        city: this.city
      })
      .subscribe(res => {
        this.status = res;
        if (res == 1) {
          alert("Sucessfully Registered!");
        } else {
          alert("You Have Allready Registered");
        }
        if (res == 1) {
          window.location.href = "/login";
        }
      });
  }
}
