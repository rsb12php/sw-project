import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url = `${environment.url_base}people/`;

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

  getFilms(url: string) {
    return this.http.get(url);
  }

}
