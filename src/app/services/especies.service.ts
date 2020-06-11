import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  url = `${environment.url_base}species/`;

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

  getStarships(url: string) {
    return this.http.get(url);
  }

  getFilmes(url: string) {
    return this.http.get(url);
  }

}
