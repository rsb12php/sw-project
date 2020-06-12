import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FilmesService } from '../services/filmes.service';
import { Filmes } from '../models/filmes.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  p: number = 1;

  filme: Filmes[];

  filmeDetalhe: Filmes;

  termo = '';

  pesquisa: Filmes;

  modalRef: BsModalRef;

  constructor(
    private filmesS: FilmesService,
    private router: Router,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private utils: UtilsService
  ) { }

  ngOnInit() {

    this.spinner.show();

    this.filmesS.getData().subscribe((rs:any) => {
      this.filme = rs.results;
      this.spinner.hide();
    });
  }

  onDetalhe( template: TemplateRef<any> , filme: Filmes ) {
    this.spinner.show();
    filme.species.forEach(async(dataShow,i,array)=>{
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });

    filme.starships.forEach(async(dataShow,i,array)=>{
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });

    filme.vehicles.forEach(async(dataShow,i,array)=>{
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });

    filme.characters.forEach(async(dataShow,i,array)=>{
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });

    filme.planets.forEach(async(dataShow,i,array)=>{
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });
    this.spinner.hide();
    
    this.modalRef = this.modalService.show(template);
    this.filmeDetalhe = filme;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.filmesS.search(this.termo).subscribe((rs:any) => {
      this.pesquisa = rs.results;
    });
  }
}
