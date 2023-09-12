import { CreateNoteFormComponent } from './components/create-note/create-note-form.component';
import { CreateNoteContainerComponent } from './components/create-note/create-note.container';
import { NotesComponent } from './components/notes/notes.component';
import { NotesContainerComponent } from './components/notes/notes.container';
import { HomeFeatureContainerComponent } from './home-feature.container';
import { HomeContainerComponent } from './home/home.container';

export const components: any[] = [
  HomeFeatureContainerComponent,
  HomeContainerComponent,
  NotesContainerComponent,
  NotesComponent,
  CreateNoteContainerComponent,
  CreateNoteFormComponent,
];
