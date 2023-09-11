import { Component } from '@angular/core';
import { State } from '@app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-notes-container',
  templateUrl: 'notes.container.html',
  styleUrls: ['notes.container.scss'],
})
export class NotesContainerComponent {
  constructor(private store: Store<State>) {}
}
