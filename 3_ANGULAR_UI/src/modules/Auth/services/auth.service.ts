import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '@shared/models/credentials.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/login`, credentials);
  }

  refreshTokens(refreshToken: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}/auth/refresh-tokens`, {
      refreshToken,
    });
  }

  logoutFromAllDevices() {}
}
