import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent implements OnInit {

  newNotes = new Notes("", "", "", 0, 0, new Date());
  @Output() addNotes = new EventEmitter<Notes>();
  submitNotes() {
    this.addNotes.emit(this.newNotes);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
