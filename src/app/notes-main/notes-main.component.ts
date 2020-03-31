import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
  styleUrls: ['./notes-main.component.css']
})
export class NotesMainComponent implements OnInit {

  notes: Notes[] = [
    new Notes('Starford', 'Og Mandino' 'Failure will never overtake me if my determination to succeed is strong enough.')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
