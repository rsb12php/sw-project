import { Component, OnInit, TemplateRef } from '@angular/core';
import { Veiculos } from '../models/vehicles.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle: Veiculos;

  vehicleDetalhe: Veiculos;

  termo = '';

  perquisa: Veiculos;

  modalRef: BsModalRef;

  constructor(
    private vehiclesS: VehiclesService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.vehiclesS.getData().subscribe((rs) => {
    this.vehicle = rs.results;
    });
  }

  onDetalhe( template: TemplateRef<any> , vehicle: Veiculos ) {
    this.modalRef = this.modalService.show(template);
    this.vehicleDetalhe = vehicle;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.vehiclesS.search(this.termo).subscribe((rs) => {
      this.perquisa = rs.results;
    });
  }
}
