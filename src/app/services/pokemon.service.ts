import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.endpoint.api;
  constructor(private http: HttpClient, private router:Router) { }
//realizamos una funcion en donde obtenemos el pokemon con el indice correspondiente
  getPokemons(index: number){
    return this.http.get<any>(`${this.baseUrl}pokemon/${index}`);
  }
  //realizamos una funcion para agregar un pokemon a favoritos 
  agregar(position: any) {
    //consultamos en session la variable logueado
    let session = sessionStorage.getItem("logueado");
    //si existe significa que ya hemos accedido a la aplicacion entonces debemos poder agregar un pokemon
    if(session){
      let favorites = localStorage.getItem("favorites");
      let newFavorites = [];
      if (favorites) {
        newFavorites = JSON.parse(favorites);
      }
      const r = newFavorites.filter((r: any) => r.name == position.name);
      if (r.length == 0) {
        newFavorites.push(position);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
      } else {
        alert("Ya ha agregado a este pokemon");
      }
    }else{
      //si el usurio no esta logueado entonces no puede agregar un pokemon
      alert("el usuario no esta Logueado");
    }
    

  }
}
