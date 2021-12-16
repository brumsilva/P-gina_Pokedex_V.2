import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { HomeComponent } from './home/home.component'
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';


//implementação do leasing load
const routes: Routes = [
  {
    path:'', // caminho da rota (onde a poessoa vai acessar)
    component: HomeComponent
  },
  {
    path:'details/:id', // caminho da rota (onde a poessoa vai acessar)
    component: PokemonDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
