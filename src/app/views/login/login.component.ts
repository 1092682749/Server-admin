import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private http: HttpClient,
              private router: Router) {}
  ngOnInit(): void {
  }
  login() {
    const params = {
      username: this.username,
      password: this.password
    };
    this.http.post('localhost:8443/admin/login', params).subscribe(
      res => {
        console.log(res);
        if (res) {
        this.router.navigate([''])
        }
      }
    );
  }
}
