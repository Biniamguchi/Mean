import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
    private noteService: NoteService;
    private note: Note;
    @Output() private noteEmitter = new EventEmitter();

    constructor(noteService: NoteService) {
        this.noteService = noteService;
    }

    ngOnInit() {
        this.note = new Note();
    }

    onSubmit() {
        this.noteEmitter.emit(this.note);
        this.note = new Note();
    }
}
