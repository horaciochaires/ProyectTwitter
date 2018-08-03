import { Component, OnInit } from '@angular/core';
import {TimeLineService} from '../../service/timeLine/time-line.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  Twetts=[];
  constructor(private MesagesDatasService: TimeLineService) { }

  ngOnInit() {
    
    this.Twetts=this.MesagesDatasService.getTwetts().reverse();
    this.Twetts.reverse();
  }

 

}
