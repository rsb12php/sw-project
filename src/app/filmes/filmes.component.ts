import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';
import { Filmes } from '../models/filmes.model';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filme: Filmes;

  termo = '';

  perquisa: Filmes;

  constructor(
    private filmesS: FilmesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filmesS.getData().subscribe((rs) => {
    this.filme = rs.results;
    });
  }

  onDetalhe( id: string ) {
    this.router.navigate(['/filmeDetalhe', id]);
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.filmesS.search(this.termo).subscribe((rs) => {
      this.perquisa = rs.results;
    });
  }
}
