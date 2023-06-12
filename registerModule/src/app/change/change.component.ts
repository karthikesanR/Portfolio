import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent {
value: any;
newPassword: any;
confirmPassword: any;
  email: any;
  passwords: any;
  forgotdata: any;
constructor(private service: ServiceService, private route: ActivatedRoute) {}

forgot() {
  let body = {
    email: this.email,

    passwords: this.newPassword,
  };

  let token = this.route.snapshot.paramMap.get('token');
  console.log(token);
  

  this.service.changePassword(body,token).subscribe((data: any) => {
    this.forgotdata = data;

    console.log(this.forgotdata);
  });
}
}
