import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from '../notes';


@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  @Input() notes: Notes;
  @Output() isDone = new EventEmitter<boolean>();

  @Output () voteIncrease = new EventEmitter<boolean>();
  @Output () voteDecrease = new EventEmitter<boolean>();

  fnDecrease(two:boolean){
    this.voteDecrease.emit(two);
  }

  fnIncrease(one:boolean){
    this.voteIncrease.emit(one);
  }
  notesMary(purge: boolean) {
    this.isDone.emit(purge);
  }

  constructor() { }

  ngOnInit() {
  }

}
