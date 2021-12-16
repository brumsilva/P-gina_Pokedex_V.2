import { Component, OnInit } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
