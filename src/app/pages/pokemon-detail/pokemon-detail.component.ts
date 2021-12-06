import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
 id:any;
 pokemon:any;
  constructor(private service:PokemonService, private route:ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.service.getPokemons(this.id).subscribe((res)=>{
      console.log(res);
      this.pokemon=res;
    })
  }
}
