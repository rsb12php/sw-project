import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:People

  termo: string = ''

  perquisa:People

  constructor(
    private peopleS:PeopleService,
    private router:Router
  ) { }

  ngOnInit() {
    this.peopleS.getData().subscribe((rs)=>{
    this.people = rs["results"]
    })
  }

  onDetalhe( id:string ){
    this.router.navigate(['/peopleDetalhe', id]);
  }

  public getPesquisa(pesquisa:Event){

    this.termo = (<HTMLInputElement>pesquisa.target).value

    this.peopleS.search(this.termo).subscribe((rs)=>{
      console.log(rs)
      this.perquisa = rs["results"]
    })
  }
  
}
