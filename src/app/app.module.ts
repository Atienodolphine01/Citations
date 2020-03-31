import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesMainComponent } from './notes-main/notes-main.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesFormComponent } from './notes-form/notes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesMainComponent,
    NotesDetailComponent,
    NotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
