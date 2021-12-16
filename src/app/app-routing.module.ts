import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//implementação do leasing load
const routes: Routes = [
  {
    path:'', // caminho da rota (onde a poessoa vai acessar)
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
    //
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
