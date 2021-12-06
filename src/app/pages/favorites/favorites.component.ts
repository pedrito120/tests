import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  data: any[] = [];
  constructor(private service: PokemonService, private router:Router) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let pokemonData = localStorage.getItem("favorites");
    if(pokemonData){
      this.data = JSON.parse(pokemonData); 
    }
    console.log(this.data);
  }

  verPokemon(position: number) {
    console.log(position);
    this.router.navigateByUrl("/pokemon-detail/" + position);
  }

  agregar(position: any) {
    this.service.agregar(position);
  }
}
