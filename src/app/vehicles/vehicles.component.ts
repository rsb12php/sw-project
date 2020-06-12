import { Component, OnInit, TemplateRef } from '@angular/core';
import { Veiculos } from '../models/vehicles.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { VehiclesService } from '../services/vehicles.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  p: number = 1;

  vehicle: Veiculos;

  vehicleDetalhe: Veiculos;

  termo = '';

  pesquisa: Veiculos;

  modalRef: BsModalRef;

  constructor(
    private vehiclesS: VehiclesService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.vehiclesS.getData().subscribe((rs:any) => {
      this.vehicle = rs.results;
      this.spinner.hide();
    });
  }

  onDetalhe( template: TemplateRef<any> , vehicle: Veiculos ) {
    this.spinner.show();

    vehicle.films.forEach(async(dataShow,i,array)=>{
      this.utils.getData(dataShow).subscribe((req)=>{
        array[i] = req;
      });
    });
    this.spinner.hide();

    this.modalRef = this.modalService.show(template);
    this.vehicleDetalhe = vehicle;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.vehiclesS.search(this.termo).subscribe((rs:any) => {
      this.pesquisa = rs.results;
    });
  }
}
