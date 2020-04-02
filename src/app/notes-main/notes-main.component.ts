import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
  styleUrls: ['./notes-main.component.css']
})
export class NotesMainComponent implements OnInit {
  nootes:Notes[] = [
    {name:'Starford', author:'Og Mandino', quote:'Failure will never overtake me if my determination to succeed is strong enough.'},
    {name:'Miriam', author:'Brian Tracy', quote:'Winners make a habit of manufacturing their own positive expectations in advance of the event.'},
    {name:'Dolphine', author:'Kobe Bryant', quote:'The most important thing is to try and inspire people so that they can be great in whatever they want to do.'},

  ];
  
  constructor() { }

  ngOnInit() {
  }
}
