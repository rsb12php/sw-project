import { Component, OnInit, TemplateRef } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Planets } from './planets.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planet:Planets

  planetDetalhe:Planets

  termo: string = ''

  perquisa:Planets

  modalRef: BsModalRef

  constructor(
    private planetsS:PlanetsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.planetsS.getData().subscribe((rs)=>{
    this.planet = rs["results"]
    })
  }

  onDetalhe( template: TemplateRef<any> , planet:Planets ){
    this.modalRef = this.modalService.show(template);
    this.planetDetalhe = planet
  }

  public getPesquisa(pesquisa:Event){

    this.termo = (<HTMLInputElement>pesquisa.target).value

    this.planetsS.search(this.termo).subscribe((rs)=>{
      this.perquisa = rs["results"]
    })
  }
  
}
