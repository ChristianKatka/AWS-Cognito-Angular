import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.scss'],
})
export class NotesComponent {
  notes = [1, 2, 3, 4];
}
