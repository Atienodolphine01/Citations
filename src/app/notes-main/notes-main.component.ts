import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
  styleUrls: ['./notes-main.component.css']
})
export class NotesMainComponent implements OnInit {
  Notes:Notes[] = [
    new Notes('Starford', 'Og Mandino', 'Failure will never overtake me if my determination to succeed is strong enough.', 0 ,0, new Date(2020,3,14)),
    new Notes('Miriam', 'Brian Tracy', 'Winners make a habit of manufacturing their own positive expectations in advance of the event.', 0, 0, new Date(2020,3,14)),
    new Notes('Dolphine', 'Kobe Bryant', 'The most important thing is to try and inspire people so that they can be great in whatever they want to do.',0 ,0, new Date(2020,3,14)),

  ];

  toggleDetails(index){
    this.Notes[index].showQuote = !this.Notes[index].showQuote;
  }

  completeNotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`);
      if (toDelete){
      this.Notes.splice(index,1);
      }
    }
  }

  addNewQuote(mary) {
    mary.elapse = new Date(mary.elapse)
    this.Notes.push(mary);
   
  }
  addVote(mary, index) {
    if (mary) {
      this.Notes[index].upvote+=1;
    }
  }
  lessVote(mary,index){
    if(mary){
      this.Notes[index].downvote+=1
    }
  }

  initialNum:number
  finalNum:number
  count:number

  mostLiked(){
    this.initialNum=0
    this.finalNum=0
    for (this.count=0; this.count < this.Notes.length;this.count++){
      this.finalNum =this.Notes[this.count].upvote;

      if(this.finalNum > this.initialNum){
        this.initialNum = this.finalNum
      }
  
    
      
    }

    return this.initialNum;
  }
  
  constructor() { }

  ngOnInit() {
  }
}
