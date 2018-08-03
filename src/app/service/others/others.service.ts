import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OthersService {
  private friends:any[]=[
    {id:1,nombre:"Batman",username:"@ElBatman",img:"https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png"},
    {id:2,nombre:"SuperMan",username:"@TheSuperman_10",img:"https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"},
    {id:3,nombre:"Mujer Maravilla",username:"@LadyXD34",img:"https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/wonder-women-512.png"},
    {id:4,nombre:"Flash",username:"@La Gacela Flash",img:"https://cdn4.iconfinder.com/data/icons/superheroes/512/theflash-512.png"}
  ]
  constructor() { }
  public getfriends():any[]{
    return this.friends;
  }
}
