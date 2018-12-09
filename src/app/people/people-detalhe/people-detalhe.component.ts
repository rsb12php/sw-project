import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detalhe',
  templateUrl: './people-detalhe.component.html',
  styleUrls: ['./people-detalhe.component.css']
})
export class PeopleDetalheComponent implements OnInit {

  people:People

  constructor(
    private router:ActivatedRoute,
    private peopleS:PeopleService
  ) {
   }

  ngOnInit() {
    this.router.params.subscribe((id:any)=>{
      this.peopleS.getDataDetail(id).subscribe((rs)=>{
        this.people = rs
        this.peopleS.getSpecies(this.people.species[0]).subscribe((rs)=>{
          this.people.species = rs.name
        })
        for(let i:number = 0; i < this.people.vehicles.length; i++){
          this.peopleS.getStarships(this.people.vehicles[i]).subscribe((rs)=> {
            this.people.vehicles[i] = rs.name
          })
        }
        for(let i:number = 0; i < this.people.films.length; i++){
          this.peopleS.getFilms(this.people.films[i]).subscribe((rs)=> {
            this.people.films[i] = rs.title
          })
        }
        for(let i:number = 0; i < this.people.starships.length; i++){
          this.peopleS.getStarships(this.people.starships[i]).subscribe((rs)=> {
            this.people.starships[i] = rs.name
          })
        }
        
      })
    })
    
  }

}
