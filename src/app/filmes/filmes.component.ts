import { Component, OnInit } from '@angular/core';
import { Filmes } from './filmes.model';
import { FilmesService } from './filmes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filme:Filmes

  termo: string = ''

  perquisa:Filmes

  constructor(
    private filmesS:FilmesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.filmesS.getData().subscribe((rs)=>{
    this.filme = rs["results"]
    })
  }

  onDetalhe( id:string ){
    this.router.navigate(['/filmeDetalhe', id]);
  }

  public getPesquisa(pesquisa:Event){

    this.termo = (<HTMLInputElement>pesquisa.target).value

    this.filmesS.search(this.termo).subscribe((rs)=>{
      this.perquisa = rs["results"]
    })
  }
}
