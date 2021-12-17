import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=001&limit=300'

  constructor(
    private http: HttpClient) { }

  get apiListPokemon():Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(
        res => res
      ),
      tap(
        res => {
          res.results.map( (resPokemons: any) => {
            //esse map é do js
          return this.ApiGetPokemon(resPokemons.url).subscribe( res => resPokemons.status = res )

          })
        }
      )
    )
  }

  public ApiGetPokemon (url: string):Observable<any>{
    return this.http.get<any>(url).pipe( map(
      res => res))
  }
}
