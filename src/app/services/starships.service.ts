import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  url = `${environment.url_base}starships/`;

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

  getFilms(url: string) {
    return this.http.get(url);
  }


}
