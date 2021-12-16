import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {

  public getAllPokemons: any;

  constructor(
    private pokkeApiService: PokeapiService
  ) { }

  ngOnInit(): void {
    this.pokkeApiService.apiListPokemon.subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    );
  }

}
