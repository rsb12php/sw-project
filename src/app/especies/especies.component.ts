import { Component, OnInit, TemplateRef } from '@angular/core';
import { Especies } from '../models/especies.model';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EspeciesService } from '../services/especies.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css'],
})
export class EspeciesComponent implements OnInit {

  p = 1;

  especie: Especies[];

  especieDetalhe: Especies;

  termo = '';

  pesquisa: Especies;

  modalRef: BsModalRef;

  constructor(
    private especiesS: EspeciesService,
    private modalService: BsModalService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private utils: UtilsService
  ) { }

  ngOnInit() {

    this.spinner.show();

    this.especiesS.getData().subscribe((rs: any) => {
      this.especie = rs.results;
      this.spinner.hide();
    });
  }

  onDetalhe( template: TemplateRef<any> , especie: Especies ) {
    this.spinner.show();

    especie.people.forEach(async(dataShow, i, array) => {
      dataShow = dataShow.replace('http', 'https');
      this.utils.getData(dataShow).subscribe((req) => {
        array[i] = req;
      });
    });

    especie.films.forEach(async(dataShow, i, array) => {
      dataShow = dataShow.replace('http', 'https');
      this.utils.getData(dataShow).subscribe((req) => {
        array[i] = req;
      });
    });
    this.spinner.hide();

    this.modalRef = this.modalService.show(template);
    this.especieDetalhe = especie;
  }


  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.especiesS.search(this.termo).subscribe((rs: any) => {
      this.pesquisa = rs.results;
    });
  }
}
