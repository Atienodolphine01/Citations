import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesMainComponent } from './notes-main/notes-main.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { HighvoteDirective } from './highvote.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotesMainComponent,
    NotesDetailComponent,
    NotesFormComponent,
    HighvoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
