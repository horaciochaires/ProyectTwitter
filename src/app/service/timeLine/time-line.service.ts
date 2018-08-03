import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeLineService {
  private usuarios:any[]=[
    {nombre:'Horacio Chairez',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/26940519?s=460&v=4'},
    {nombre:'Ricardo Sauceda',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/29348368?s=400&u=86c5d5cbde50f5f0f4c52be07c2d8dc7b668fc79&v=4'},
    {nombre:'Camilo Orrante',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/26940519?s=460&v=4'},
    {nombre:'Ricardo Sauceda',Contenido:'Este es un Texto harcodeado el cual solo es un template Este es un Texto harcodeado el cual solo es un template',img:'https://avatars0.githubusercontent.com/u/29348368?s=400&u=86c5d5cbde50f5f0f4c52be07c2d8dc7b668fc79&v=4'}
  
  ]
  
private friends:any[]=[
  {id:1,nombre:"Batman",img:"https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png"},
  {id:2,nombre:"SuperMan",img:"https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"},
  {id:3,nombre:"Mujer Maravilla",img:"https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/wonder-women-512.png"},
  {id:4,nombre:"Flash",img:"https://cdn4.iconfinder.com/data/icons/superheroes/512/theflash-512.png"}
]

public postMensajes(mensaje:any){
  const mensajeobj={
    nombre:'Horacio Chairez',
    mensaje:mensaje,
    img:'https://avatars0.githubusercontent.com/u/26940519?s=460&v=4'
  };
  this.usuarios.push(mensajeobj)
  console.log(mensajeobj);
}
  constructor() { }
}
