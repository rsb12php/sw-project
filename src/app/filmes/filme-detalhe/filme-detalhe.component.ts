import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filmes } from 'src/app/models/filmes.model';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})
export class FilmeDetalheComponent implements OnInit {

  filme: Filmes;

  constructor(
    private router: ActivatedRoute,
    private filmesS: FilmesService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((id: any) => {
      this.filmesS.getDataDetail(id).subscribe((rs: any) => {
        this.filme = rs;
        this.filmesS.getSpecies(this.filme.species[0]).subscribe((rs: any) => {
          this.filme.species = rs.name;
        });
        for (let i = 0; i < this.filme.starships.length; i++) {
          this.filmesS.getStarships(this.filme.starships[i]).subscribe((rs: any) => {
            this.filme.starships[i] = rs.name;
          });
        }
        for (let i = 0; i < this.filme.vehicles.length; i++) {
          this.filmesS.getVehicles(this.filme.vehicles[i]).subscribe((rs: any) => {
            this.filme.vehicles[i] = rs.name;
          });
        }
        for (let i = 0; i < this.filme.characters.length; i++) {
          this.filmesS.getPeople(this.filme.characters[i]).subscribe((rs: any) => {
            this.filme.characters[i] = rs.name;
          });
        }
        for (let i = 0; i < this.filme.planets.length; i++) {
          this.filmesS.getPlanets(this.filme.planets[i]).subscribe((rs: any) => {
            this.filme.planets[i] = rs.name;
          });
        }
      });
    });
  }
}
