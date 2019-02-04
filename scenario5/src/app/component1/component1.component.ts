import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  Message: string;
  constructor() { }

  ngOnInit() {
  }
  messageChildHandler(value : string){
    this.Message = value;
  }
}