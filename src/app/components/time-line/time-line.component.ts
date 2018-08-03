import { Component, OnInit } from '@angular/core';
import {TimeLineService} from '../../service/timeLine/time-line.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
   closeResult: string;
  Twetts=[];
  mensaje:string;
  usuarioSeleccionado = "Default";
  usuarioReceptor: any;


  constructor(private MesagesDatasService: TimeLineService) { }

  ngOnInit() {
    
    this.Twetts=this.MesagesDatasService.getTwetts().reverse();
    console.log(this.Twetts);
  }

 
  public  postMensaje(){
    this.usuarioReceptor= localStorage.getItem("IdReceptor");
    this.MesagesDatasService.postMensajes(this.mensaje);
    this.mensaje='';
   
  }

}
