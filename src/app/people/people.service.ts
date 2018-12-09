import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry'
import { race } from 'q';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url:string = "https://swapi.co/api/people/"

  constructor(
    private http:Http
  ) { }

  getData(){
    return this.http.get(this.url).map(rs=> rs.json())
  }

  getDataDetail(id:string){
    return this.http.get(`${this.url}${id["id"]}/`).map(rs => rs.json())
  }
  
  search(termo:string){
    return this.http.get(`${this.url}?search=${termo}`)
    .retry(10)
    .map(rs=> rs.json())
  }

  getSpecies(url:string){
    return this.http.get(url).map(rs=> rs.json())
  }

  getStarships(url:string){
    return this.http.get(url).map(rs=> rs.json())
  }

  getFilms(url:string){
    return this.http.get(url).map(rs=> rs.json())
  }
  
}
