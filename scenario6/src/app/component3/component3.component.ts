import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  message:string;
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }
}
