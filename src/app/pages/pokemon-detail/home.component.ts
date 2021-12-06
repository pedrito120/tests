import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  constructor(private service: PokemonService, private router : Router) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let pokemonData;
    for (let index = 1; index < 21; index++) {
      this.service.getPokemons(index).subscribe(
        res => {
          pokemonData = {
            position: index,
            img: res.sprites.front_default,
            name: res.name
          }
          this.data.push(pokemonData);
        })
    }
    console.log(this.data);
  }
  verPokemon(position:number){
    console.log(position);
    this.router.navigateByUrl("/pokemon-detail/"+position);
  }

  agregar(position:any){
    
  }

}
