import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PeopleService } from '../services/people.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  p = 1;

  people: People[];

  peopleDetalhe: People;

  termo = '';

  pesquisa: People;

  modalRef: BsModalRef;

  constructor(
    private peopleS: PeopleService,
    private router: Router,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private utils: UtilsService
  ) { }

  ngOnInit() {

    this.spinner.show();

    this.peopleS.getData().subscribe((rs: any) => {
      this.people = rs.results;
      this.spinner.hide();
    });
  }

  onDetalhe( template: TemplateRef<any> , people: People ) {
    this.spinner.show();
    people.films.forEach(async(dataShow, i, array) => {
      dataShow = dataShow.replace('http', 'https');
      this.utils.getData(dataShow).subscribe((req) => {
        array[i] = req;
      });
    });

    people.starships.forEach(async(dataShow, i, array) => {
      dataShow = dataShow.replace('http', 'https');
      this.utils.getData(dataShow).subscribe((req) => {
        array[i] = req;
      });
    });

    people.vehicles.forEach(async(dataShow, i, array) => {
      dataShow = dataShow.replace('http', 'https');
      this.utils.getData(dataShow).subscribe((req) => {
        array[i] = req;
      });
    });
    people.homeworld = people.homeworld.replace('http', 'https');
    this.utils.getData(people.homeworld).subscribe((req: any) => {
      people.homeworld = req.name;
    });

    this.spinner.hide();

    this.modalRef = this.modalService.show(template);
    this.peopleDetalhe = people;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.peopleS.search(this.termo).subscribe((rs: any) => {
      console.log(rs);
      this.pesquisa = rs.results;
    });
  }

}
