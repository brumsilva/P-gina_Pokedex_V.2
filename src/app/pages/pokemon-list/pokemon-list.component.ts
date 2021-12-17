import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {


  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(
    private pokkeApiService: PokeapiService
  ) { }

  ngOnInit(): void {
    this.pokkeApiService.apiListPokemon.subscribe(
      res => {

        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        console.log(this.getAllPokemons);
        console.log(this.setAllPokemons)
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getsearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) =>{
      return !res.name.indexOf(value.toLowerCase());}) //função do js

      this.getAllPokemons = filter;
  }

}
