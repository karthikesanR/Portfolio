import { Component,OnInit } from '@angular/core';
import { student } from '../test';
import { ServiceService } from '../service.service';




@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})



export class ParentComponent implements OnInit{
  parentData: string = 'Hello from parent!';
  receivedMessage: any;
  dataService: any;

  receiveMessage(message: any) {
    this.receivedMessage = message;
  }

  // array
  names: string[] = ['Ajith', 'Karthikesan', 'Aravind'];
 //json
  data: any[] = [];

  addData(childData: any) {
    this.data.push(childData);
  }

  //  studentObj:any[]=[
  //   {
  //     name:'Karthi',
  //     age:23,
  //     dept:'MCT'
  //   },
  //   {
  //     name:'Ajith',
  //     age:25,
  //     dept:'IT'
  //   },
  //   {
  //     name:'Aathi',
  //     age:23,
  //     dept:'CSE'
  //   },
  //   {
  //     name:'Aravind',
  //     age:23,
  //     dept:'ECE'
  //   },
  //   {
  //     name:'Mohan',
  //     age:23,
  //     dept:'MECH'
  //   },
  // ]
  // std= new  student ();
  student:any;
  constructor( public std: ServiceService){

  }
  ngOnInit(): void {
    this.sendData()
    // throw new Error('Method not implemented.');
    this.std.getData().subscribe((data)=>{
      this.student=data
    })
  }


  sendData() {
    const data = {id:55, username: 'muthu', email: "muthu@1233",message:"hi" }; // Sample data to be sent

    this.std.postData(data).subscribe(
      (data) => {
        this.student=data
        // Handle the response from the server
      },
      
    );
  }


}




  
  


