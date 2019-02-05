import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  message:string;
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

}
