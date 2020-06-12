// pacotes de dev
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

// routas da aplicação
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { FilmesComponent } from './filmes/filmes.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EspeciesComponent } from './especies/especies.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';

// Services
import { PeopleService } from './services/people.service';
import { PlanetsService } from './services/planets.service';
import { FilmesService } from './services/filmes.service';
import { StarshipsService } from './services/starships.service';
import { EspeciesService } from './services/especies.service';
import { VehiclesService } from './services/vehicles.service';
import { UtilsService } from './services/utils.service';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

//i18n
import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt); 

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserModule, 
    NgxPaginationModule,
    ModalModule.forRoot(),
  ],
  providers: [
    {provide:LOCALE_ID,useValue:"pt-BR"},
    PeopleService,
    PlanetsService,
    FilmesService,
    StarshipsService,
    EspeciesService,
    VehiclesService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
