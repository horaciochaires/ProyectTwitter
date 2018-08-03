import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Twetts=[
    {nombre:'Horacio Chairez',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/26940519?s=460&v=4'},
    {nombre:'Ricardo Sauceda',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/29348368?s=400&u=86c5d5cbde50f5f0f4c52be07c2d8dc7b668fc79&v=4'},
    {nombre:'Camilo Orrante',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/26940519?s=460&v=4'},
    {nombre:'Ricardo Sauceda',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/29348368?s=400&u=86c5d5cbde50f5f0f4c52be07c2d8dc7b668fc79&v=4'}
  ]

}
