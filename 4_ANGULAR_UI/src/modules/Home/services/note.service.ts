import { Injectable } from '@angular/core';
import { AuthHTTPService } from '@auth/services/auth-http.service';
import { Note, NoteDraft } from '@shared/models/note.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class NoteService {
  constructor(private authHttp: AuthHTTPService) {}

  createNote(noteDraft: NoteDraft): Observable<Note> {
    return this.authHttp.post(`${environment.apiBaseUrl}/note`, noteDraft);
  }

  getNotes(): Observable<Note[]> {
    return this.authHttp.get(`${environment.apiBaseUrl}/note`);
  }

  deleteNote(id: string): Observable<{ id: string }> {
    return this.authHttp.delete(`${environment.apiBaseUrl}/note/${id}`);
  }
}
