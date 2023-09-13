import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '@shared/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.scss'],
})
export class NotesComponent {
  @Input()
  notes: Note[] = [];

  @Input()
  isLoading = false;

  @Output()
  deleteNote: EventEmitter<string> = new EventEmitter();
}
