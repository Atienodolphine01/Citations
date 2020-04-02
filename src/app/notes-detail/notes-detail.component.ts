import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Notes } from '../notes';


@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  @Input() Notes: Notes;
  @Output() isComplete = new EventEmitter<boolean>();

  NotesComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
