import { Component } from '@angular/core';
import { State } from '@app/store';
import { NoteActions } from '@home/store/actions';
import { Store } from '@ngrx/store';
import { NoteDraft } from '@shared/models/note.model';

@Component({
  selector: 'app-create-note-container',
  templateUrl: 'create-note.container.html',
  styleUrls: ['create-note.container.scss'],
})
export class CreateNoteContainerComponent {
  constructor(private store: Store<State>) {}

  createNote(noteDraft: NoteDraft) {
    this.store.dispatch(NoteActions.CreateNote.initiate({ noteDraft }));
  }
}
