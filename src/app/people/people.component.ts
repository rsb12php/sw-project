import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { PeopleService } from '../services/people.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: People;

  termo = '';

  perquisa: People;

  constructor(
    private peopleS: PeopleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.peopleS.getData().subscribe((rs) => {
    this.people = rs.results;
    });
  }

  onDetalhe( id: string ) {
    this.router.navigate(['/peopleDetalhe', id]);
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.peopleS.search(this.termo).subscribe((rs) => {
      console.log(rs);
      this.perquisa = rs.results;
    });
  }

}
