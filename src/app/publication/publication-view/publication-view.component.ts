import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publication-view',
  templateUrl: './publication-view.component.html',
  styleUrls: ['./publication-view.component.scss']
})
export class PublicationViewComponent implements OnInit {

  publications$ = this.publicationService.get();

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
  }
}
