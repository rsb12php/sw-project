import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  url = `${environment.url_base}planets/`;

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get(this.url);
  }

  getDataDetail(id: string) {
    return this.http.get(`${this.url}${id.id}/`);
  }

  search(termo: string) {
    return this.http.get(`${this.url}?search=${termo}`)
    .retry(10);
  }

  getSpecies(url: string) {
    return this.http.get(url);
  }

  getPlanets(url: string) {
    return this.http.get(url);
  }

  getStarships(url: string) {
    return this.http.get(url);
  }

  getFilms(url: string) {
    return this.http.get(url);
  }

}
