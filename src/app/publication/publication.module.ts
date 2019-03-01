import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationViewComponent } from './publication-view/publication-view.component';
import { PublicationWriteComponent } from './publication-write/publication-write.component';
import { PublicationMainComponent } from './publication-main/publication-main.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PublicationViewComponent,
    PublicationWriteComponent,
    PublicationMainComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    PublicationMainComponent,
  ]
})
export class PublicationModule { }
