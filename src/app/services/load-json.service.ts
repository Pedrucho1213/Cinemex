import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadJsonService {
 private searchUrl : String;
 
  private query : String = "";

  private baseUrl : String;
  private baseSerie : String = 'https://api.themoviedb.org/3/tv/popular?api_key=8d30f90ba77a274b2ed737f34a8f2bf2&language=en-US&page=1';
 
  constructor( private readonly http: HttpClient) {

   }



   getPopular(page : number) : Observable <any> {
     console.log (page);
    this.baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=8d30f90ba77a274b2ed737f34a8f2bf2&language=en-US&page=${page}`;
     return this.http.get(`${this.baseUrl}`);
   }



   getSeriePopular() : Observable <any>{
     return this.http.get(`${this.baseSerie}`);
   }



   searchFilm(query : String) : Observable  <any>{
   this.searchUrl  = `https://api.themoviedb.org/3/search/movie?api_key=8d30f90ba77a274b2ed737f34a8f2bf2&language=en-US&query=${query}&page=1&include_adult=false`;
     this.query = query;
     console.log(this.query);
     return this.http.get(`${this.searchUrl}`);
   }


}
