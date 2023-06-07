import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() childData: any;
  @Output() messageEvent = new EventEmitter<string>();
  @Input()
  names: string[] = [];

  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }

  // json
  @Output() dataEvent = new EventEmitter<any>();

  sendDataToParent() {
    const childData = { name: 'Anbu', age: 25 }
    ;
    this.dataEvent.emit(childData);
  }

  
}

