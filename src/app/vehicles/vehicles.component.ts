import { Component, OnInit, TemplateRef } from '@angular/core';
import { Veiculos } from './vehicles.model';
import { VehiclesService } from './vehicles.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle:Veiculos

  vehicleDetalhe:Veiculos

  termo: string = ''

  perquisa:Veiculos

  modalRef: BsModalRef;

  constructor(
    private vehiclesS:VehiclesService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.vehiclesS.getData().subscribe((rs)=>{
    this.vehicle = rs["results"]
    })
  }

  onDetalhe( template: TemplateRef<any> , vehicle:Veiculos ){
    this.modalRef = this.modalService.show(template);
    this.vehicleDetalhe = vehicle
  }

  public getPesquisa(pesquisa:Event){

    this.termo = (<HTMLInputElement>pesquisa.target).value

    this.vehiclesS.search(this.termo).subscribe((rs)=>{
      this.perquisa = rs["results"]
    })
  }
}
