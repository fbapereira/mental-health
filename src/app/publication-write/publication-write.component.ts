import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../services/publication.service';
import { Publication } from '../models/publication.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-publication-write',
  templateUrl: './publication-write.component.html',
  styleUrls: ['./publication-write.component.scss']
})
export class PublicationWriteComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private publicationService: PublicationService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  onSubmit() {
    const publication: Publication = {
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
      comments: [],
      key_words: [],
    };

    this.publicationService.create(publication).subscribe(() => {
      this.snackBar.open('Your depoiment have been published')
      this.form.reset();
    });
  }
}
