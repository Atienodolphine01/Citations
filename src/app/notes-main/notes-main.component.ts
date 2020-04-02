import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
  styleUrls: ['./notes-main.component.css']
})
export class NotesMainComponent implements OnInit {
  notes:Notes[] = [
    {name:'Starford', author:'Og Mandino'},
    {name:'Miriam', author:'Brian Tracy'},
    {name:'Dolphine', author:'Kobe Bryant'},

  ];
  
  constructor() { }

  ngOnInit() {
  }
}
