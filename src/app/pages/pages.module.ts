import { RoutingModule } from './routing_module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

//pages
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonDetailsComponent,
    PokemonListComponent
  ],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
