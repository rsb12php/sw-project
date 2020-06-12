import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  url = `${environment.url_base}films/`;

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get(this.url);
  }

  getDataDetail(id: any) {
    return this.http.get(`${this.url}${id.id}/`);
  }

  search(termo: string) {
    return this.http.get(`${this.url}?search=${termo}`)
    .retry(10);
  }

  getSpecies(url: string) {
    return this.http.get(url);
  }

  getStarships(url: string) {
    return this.http.get(url);
  }
  getVehicles(url: string) {
    return this.http.get(url);
  }
  getPeople(url: string) {
    return this.http.get(url);
  }
  getPlanets(url: string) {
    return this.http.get(url);
  }

}
