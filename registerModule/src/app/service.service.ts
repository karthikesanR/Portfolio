import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  insertData(data: any) {
    return this.http.post(this.url + '/insert', data);
  }
  getData() {
    return this.http.get(this.url + '/checkUser');
  }
  checktoken(token: any) {
    return this.http.put(this.url + `/validateToken`, { token: token });
  }
  login(data: any) {
    return this.http.post(this.url + '/login', data);
  }

  forgotPassword(forgotpassword: any) {
    console.log(forgotpassword);

    return this.http.post(this.url + '/forgotpassword', forgotpassword);
  }

  changePassword(body: any, forgotpasswordtoken: any) {
    console.log(forgotpasswordtoken);
    console.log(body);

    return this.http.post(this.url + `/changepassword`, {
      token: forgotpasswordtoken,
      email: body.email,
      passwords: body.passwords,
    });

  }
}
