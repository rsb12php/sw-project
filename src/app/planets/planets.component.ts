import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Planets } from '../models/planets.model';
import { PlanetsService } from '../services/planets.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  p: number = 1;

  planet: Planets;

  planetDetalhe: Planets;

  termo = '';

  pesquisa: Planets;

  modalRef: BsModalRef;

  constructor(
    private planetsS: PlanetsService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private utils: UtilsService
  ) { }

  ngOnInit() {

    this.spinner.show();

    this.planetsS.getData().subscribe((rs:any) => {
      this.planet = rs.results;
      this.spinner.hide();

    });
  }

  onDetalhe( template: TemplateRef<any> , planet: Planets ) {
    this.spinner.show();

    planet.residents.forEach(async(dataShow,i,array)=>{
      dataShow = dataShow.replace('http', 'https')
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });

    planet.films.forEach(async(dataShow,i,array)=>{
      dataShow = dataShow.replace('http', 'https')
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });
    this.spinner.hide();

    this.modalRef = this.modalService.show(template);
    this.planetDetalhe = planet;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.planetsS.search(this.termo).subscribe((rs:any) => {
      this.pesquisa = rs.results;
    });
  }

}
