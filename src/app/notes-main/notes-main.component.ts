import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
  styleUrls: ['./notes-main.component.css']
})
export class NotesMainComponent implements OnInit {

  notes: Notes[] = [
    new Notes('Starford', 'Og Mandino' 'Failure will never overtake me if my determination to succeed is strong enough.', 0, 0,new Date(31,3,2020));
    new Notes('Miriam', ' Brian Tracy' 'Winners make a habit of manufacturing their own positive expectations in advance of the event.', 0, 0,new Date(31,3,2020));
    new Notes('Dolphine', 'Kobe Bryant' 'The most important thing is to try and inspire people so that they can be great in whatever they want to do.', 0, 0,new Date(31,3,2020));
    
  ];
  toggleDetails(index) {
    this.notes[index].viewDetails = !this.notes[index].viewDetails;
  }

  deleteNotes(isDone,index){
    if (isDone) {
      let toDelete = confirm(`Are you sure you want to delete this Qoute`);
      if (toDelete) {
        this.notes.splice(index, 1);
      }
    }
  }

  addNewNotes(mary){
    if(mary){
      mary.elapse = new Date(mary.elapse)
      this.notes.push(mary);
    }
  }

  addVote(mary, index) {
    if (mary) {
      this.notes[index].upvote+=1;
    }
  }

  lessVote(mary, index)
    if (mary){
     this.notes[index].downvote+=1;
  }

}

  initNum:number
  finNum:number
  counter:number

  mostLiked(){
    this.initNum=0
    this.finNum=0
    for (this.counter=0; this.counter < this.notes.length;this.counter++){
      this.finNum =this.notes[this.counter].upvote;

      if(this.finNum > this.initNum){
        this.initNum = this.finNum
      }
  
    
      
    }

    return this.initNum;
  }

  constructor() { }

  ngOnInit() {
  }
