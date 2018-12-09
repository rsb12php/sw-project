import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  url:string = "https://swapi.co/api/films/"

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
  getVehicles(url:string){
    return this.http.get(url).map(rs=> rs.json())
  }
  getPeople(url:string){
    return this.http.get(url).map(rs=> rs.json())
  }
  getPlanets(url:string){
    return this.http.get(url).map(rs=> rs.json())
  }

}
