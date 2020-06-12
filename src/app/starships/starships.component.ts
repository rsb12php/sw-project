import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Startships } from '../models/startships.model';
import { StarshipsService } from '../services/starships.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  p = 1;

  starship: Startships;

  termo = '';

  starshipDetalhe: Startships;

  pesquisa: Startships;

  modalRef: BsModalRef;

  constructor(
    private starshipsS: StarshipsService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.starshipsS.getData().subscribe((rs: any) => {
      this.starship = rs.results;
      this.spinner.hide();
    });
  }

  onDetalhe( template: TemplateRef<any> , starship: Startships ) {
    this.spinner.show();
    starship.films.forEach(async(dataShow, i, array) => {
      dataShow = dataShow.replace('http', 'https');
      this.utils.getData(dataShow).subscribe((req) => {
        array[i] = req;
      });
    });
    this.spinner.hide();

    this.modalRef = this.modalService.show(template);
    this.starshipDetalhe = starship;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.starshipsS.search(this.termo).subscribe((rs: any) => {
      this.pesquisa = rs.results;
    });
  }
}
