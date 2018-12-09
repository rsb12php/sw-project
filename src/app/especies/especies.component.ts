import { Component, OnInit, TemplateRef } from '@angular/core';
import { Especies } from './especies.model';
import { EspeciesService } from './especies.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  especie:Especies

  especieDetalhe:Especies

  termo: string = ''

  perquisa:Especies

  modalRef: BsModalRef;

  constructor(
    private especiesS:EspeciesService,
    private modalService: BsModalService,
    private router:Router
  ) { }

  ngOnInit() {
    this.especiesS.getData().subscribe((rs)=>{
    this.especie = rs["results"]
    })
  }

  onDetalhe( template: TemplateRef<any> , especie:Especies ){
    this.modalRef = this.modalService.show(template);
    this.especieDetalhe = especie
  }

  public getPesquisa(pesquisa:Event){

    this.termo = (<HTMLInputElement>pesquisa.target).value

    this.especiesS.search(this.termo).subscribe((rs)=>{
      this.perquisa = rs["results"]
    })
  }
}
