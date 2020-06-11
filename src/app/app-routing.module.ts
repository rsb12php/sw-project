import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { FilmesComponent } from './filmes/filmes.component';
import { EspeciesComponent } from './especies/especies.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleDetalheComponent } from './people/people-detalhe/people-detalhe.component';
import { FilmeDetalheComponent } from './filmes/filme-detalhe/filme-detalhe.component';
import { VehicleDetalheComponent } from './vehicles/vehicle-detalhe/vehicle-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'peopleDetalhe/:id', component: PeopleDetalheComponent},
  { path: 'filmeDetalhe/:id', component: FilmeDetalheComponent},
  { path: 'vehicleDetalhe/:id', component: VehicleDetalheComponent},
  { path: 'filmes', component: FilmesComponent },
  { path: 'especies', component: EspeciesComponent },
  { path: 'planets', component: PlanetsComponent},
  { path: 'vehicles', component: VehiclesComponent},
  { path: 'starships', component: StarshipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
