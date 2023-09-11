import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthCredentials } from '@shared/models/auth-credentials.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(
      `${environment.authApiBaseUrl}/auth/login`,
      credentials
    );
  }

  register(credentials: AuthCredentials): Observable<any> {
    return this.http.post(
      `${environment.authApiBaseUrl}/auth/register`,
      credentials
    );
  }

  refreshTokens(refreshToken: string): Observable<any> {
    return this.http.post(`${environment.authApiBaseUrl}/auth/refresh-tokens`, {
      refreshToken,
    });
  }

  logoutFromAllDevices() {}
}
