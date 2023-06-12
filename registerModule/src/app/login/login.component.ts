import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: any;
  passwords: any;
  loginalert: any;
  forgotdata: any;

  constructor(private service: ServiceService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      // console.log(queryParams,'queryparams');
      let token = queryParams['token'];
      console.log(token, 'token');
      this.checktoken(token);
    });
  }
  // checkData() {
  //   this.service.getData().subscribe((res) => {
  //     this.data = res;
  //     console.log(this.data);
  //   });
  // }
  checktoken(token: any) {
    this.service.checktoken(token).subscribe((data) => {
      console.log(data, 'data');
    });
  }
  login() {
    let loginData = {
      email: this.email,

      passwords: this.passwords,
    };

    this.service.login(loginData).subscribe((data) => {
      this.loginalert = data;

      console.log(this.loginalert);

      if (this.loginalert[0].id) {
        alert('Login successful');

        // this.route.navigate(['/table', this.loginalert[0].id]);
      } else {
        alert('Invalid email or Password');
      }
    });
  }

  forgot() {
    let data = {
      email: this.email,

      passwords: this.passwords,
    };

    this.service.forgotPassword(data).subscribe((data) => {
      this.forgotdata = data;

      console.log(this.forgotdata);

      if (this.forgotdata.length > 0) {
        alert('link send to your mail');
      } else {
        alert('invalid credentials');
      }
    });
  }
 
}
