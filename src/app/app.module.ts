//pacotes de dev
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

//routas da aplicação
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { FilmesComponent } from './filmes/filmes.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EspeciesComponent } from './especies/especies.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleDetalheComponent } from './people/people-detalhe/people-detalhe.component';
import { FilmeDetalheComponent } from './filmes/filme-detalhe/filme-detalhe.component';
import { VehicleDetalheComponent } from './vehicles/vehicle-detalhe/vehicle-detalhe.component';

//Services
import { PeopleService } from './people/people.service';
import { PlanetsService } from './planets/planets.service';
import { FilmesService } from './filmes/filmes.service';
import { StarshipsService } from './starships/starships.service';
import { EspeciesService } from './especies/especies.service';
import { VehiclesService } from './vehicles/vehicles.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    FilmesComponent,
    VehiclesComponent,
    EspeciesComponent,
    PlanetsComponent,
    StarshipsComponent,
    PeopleDetalheComponent,
    FilmeDetalheComponent,
    VehicleDetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ModalModule.forRoot(),
  ],
  providers: [
    PeopleService,
    PlanetsService,
    FilmesService,
    StarshipsService,
    EspeciesService,
    VehiclesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
