import { Component, OnInit } from '@angular/core';
import {TimeLineService} from '../../service/timeLine/time-line.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  closeResult: string;
  Twetts=[];
  mensaje:string;
  usuarioSeleccionado = "Default";
  usuarioReceptor: any;

  constructor(private modalService: NgbModal,private MesagesDatasService: TimeLineService) {}

  ngOnInit() {
    this.Twetts=this.MesagesDatasService.getTwetts();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public  postMensaje(){
    this.usuarioReceptor= localStorage.getItem("IdReceptor");
    this.MesagesDatasService.postMensajes(this.mensaje);
    this.mensaje='';
   
  }


}


