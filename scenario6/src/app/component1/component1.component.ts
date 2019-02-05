import { Component, OnInit ,Injectable} from '@angular/core';
import { DataService } from './../shared/data.service';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})

@Injectable()
export class Component1Component implements OnInit {
 message : string;
  constructor(private dataservice : DataService) { }

  ngOnInit() {
    // this.dataservice.currentMessage.subscribe(message => this.message = message);
  }

  onSubmit(value){
    this.dataservice.changeMessage(value);
  }

}
