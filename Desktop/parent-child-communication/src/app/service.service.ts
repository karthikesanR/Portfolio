import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  deleteData(id: number) {
    throw new Error('Method not implemented.');
  }
url1=("http://localhost:3000/getall")
url2=("http://localhost:3000/insert")
url3=("http://localhost:3000/delete")
  constructor(private http:HttpClient) {


   }


  getData(){
    return this.http.get(this.url1)
  }
  

  postData(StudData: any): Observable<any> {
    return this.http.post(this.url2, StudData);
  }
  deleteDate(){
    return this.http.delete(this.url3)
  }
}
