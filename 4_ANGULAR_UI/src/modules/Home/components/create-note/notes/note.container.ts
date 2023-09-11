import { Component } from '@angular/core';
import { State } from '@app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-note-container',
  templateUrl: 'note.container.html',
  styleUrls: ['note.container.scss'],
})
export class NoteContainerComponent {
  constructor(private store: Store<State>) {}
}
