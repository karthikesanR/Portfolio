import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servics',
  templateUrl: './servics.component.html',
  styleUrls: ['./servics.component.scss']
})
export class ServicsComponent {
  url=("http://localhost:4200/assets/student.json")

  
   constructor(private http:HttpClient){


    
   }
  
}
