import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Planets } from '../models/planets.model';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planet: Planets;

  planetDetalhe: Planets;

  termo = '';

  perquisa: Planets;

  modalRef: BsModalRef;

  constructor(
    private planetsS: PlanetsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.planetsS.getData().subscribe((rs) => {
    this.planet = rs.results;
    });
  }

  onDetalhe( template: TemplateRef<any> , planet: Planets ) {
    this.modalRef = this.modalService.show(template);
    this.planetDetalhe = planet;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.planetsS.search(this.termo).subscribe((rs) => {
      this.perquisa = rs.results;
    });
  }

}
