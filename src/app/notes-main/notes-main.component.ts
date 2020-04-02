import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
  styleUrls: ['./notes-main.component.css']
})
export class NotesMainComponent implements OnInit {
  Notes:Notes[] = [
    new Notes('Starford', 'Og Mandino', 'Failure will never overtake me if my determination to succeed is strong enough.'),
    new Notes('Miriam', 'Brian Tracy', 'Winners make a habit of manufacturing their own positive expectations in advance of the event.'),
    new Notes('Dolphine', 'Kobe Bryant', 'The most important thing is to try and inspire people so that they can be great in whatever they want to do.'),

  ];

  toggleDetails(index){
    this.Notes[index].showQuote = !this.Notes[index].showQuote;
  }

  completeNotes(isComplete, index){
    if (isComplete) {
      this.Notes.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit() {
  }
}
