import { Component, OnInit } from '@angular/core';
import { OthersService } from '../../service/others/others.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
friends:any[];
  constructor(private friendService: OthersService) { }

ngOnInit() {
    this.friends= this.friendService.getfriends();
  }
  

}
