import { Component, OnInit } from '@angular/core';
import { State } from '@app/store';
import { NoteActions } from '@home/store/actions';
import { NoteSelectors } from '@home/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-notes-container',
  templateUrl: 'notes.container.html',
})
export class NotesContainerComponent implements OnInit {
  notesControlData$ = this.store.select(NoteSelectors.getNotesControlData);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(NoteActions.GetNotes.initiate());
  }

  deleteNote(id: string) {
    this.store.dispatch(NoteActions.DeleteNote.initiate({ id }));
  }
}
