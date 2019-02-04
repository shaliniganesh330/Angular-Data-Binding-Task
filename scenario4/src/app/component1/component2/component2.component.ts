import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
 
  message:String;

  @Output() messageChild = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
   this.messageChild.emit(this.message)
  }
}
