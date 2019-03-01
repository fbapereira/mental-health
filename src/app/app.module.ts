import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material/material.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { PublicationViewComponent } from './publication-view/publication-view.component';
import { PublicationWriteComponent } from './publication-write/publication-write.component';
import { LayoutModule } from './layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    PublicationViewComponent,
    PublicationWriteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    UserModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ],
  exports: [
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
