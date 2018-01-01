import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
private title: String = 'Anonymous Notes';
    private noteService: NoteService;
    private notes: Array<Note> = [];
    @Input() private note: Note;

    constructor(noteService: NoteService) {
        this.noteService = noteService;
    }

    public index() {
        this.noteService.index()
        .then(notes => this.notes = notes)
        .catch(err => console.log(err));
    }

    public create(note: Note) {
        this.noteService.create(note)
        .then((newNote) => {this.notes.push(newNote); console.log(newNote); })
        // Create + return note, so we can push to notes without requerying all? Hope it works, thatd be amazing.
        .catch(err => console.log(err));
    }

    ngOnInit() {
        this.index();
    }

    onNoteCreated(note: Note) {
        this.create(note);
    }
}
