import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  data: any;
  name: any;
  email: any;
  address: any;
  state: any;
  city: any;
  password: any;
  token: any;

  constructor(
    private service: ServiceService,
    private actvie: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
   
   
     
  
    
  }
  insertData() {
    let data = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      state: this.state,
      city: this.city,
    };
    console.log(data);

    this.service.insertData(data).subscribe(() => {});
  }

  
}
