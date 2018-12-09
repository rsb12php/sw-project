import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';
import { Veiculos } from '../vehicles.model';

@Component({
  selector: 'app-vehicle-detalhe',
  templateUrl: './vehicle-detalhe.component.html',
  styleUrls: ['./vehicle-detalhe.component.css']
})
export class VehicleDetalheComponent implements OnInit {

  vehicle:Veiculos

  constructor(
    private router:ActivatedRoute,
    private vehiclesS:VehiclesService
  ) {
   }

  ngOnInit() {
    this.router.params.subscribe((id:any)=>{
      this.vehiclesS.getDataDetail(id).subscribe((rs)=>{
        this.vehicle = rs
        this.vehiclesS.getFilms(this.vehicle.films[0]).subscribe((rs)=>{
          this.vehicle.films = rs.title
        })
        
        
      })
    })
    
  }

}
