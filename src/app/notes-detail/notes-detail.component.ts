import { Component, OnInit, Input, } from '@angular/core';
import { Notes } from '../notes';


@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  @Input() notes: Notes;
  constructor() { }

  ngOnInit() {
  }

}
