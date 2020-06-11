import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Startships } from '../models/startships.model';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starship: Startships;

  termo = '';

  starshipDetalhe: Startships;

  perquisa: Startships;

  modalRef: BsModalRef;

  constructor(
    private starshipsS: StarshipsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.starshipsS.getData().subscribe((rs) => {
    this.starship = rs.results;
    });
  }

  onDetalhe( template: TemplateRef<any> , starship: Startships ) {
    this.modalRef = this.modalService.show(template);
    this.starshipDetalhe = starship;
  }

  public getPesquisa(pesquisa: Event) {

    this.termo = (pesquisa.target as HTMLInputElement).value;

    this.starshipsS.search(this.termo).subscribe((rs) => {
      this.perquisa = rs.results;
    });
  }
}
