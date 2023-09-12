import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteDraft } from '@shared/models/note.model';

@Component({
  selector: 'app-create-note-form',
  templateUrl: 'create-note-form.component.html',
  styleUrls: ['create-note-form.component.scss'],
})
export class CreateNoteFormComponent {
  @Input()
  loading = false;

  @Output()
  createNote: EventEmitter<any> = new EventEmitter();

  createNoteForm = new FormGroup({
    heading: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  });

  submit() {
    this.createNote.emit(this.createNoteForm.value);
  }
}
