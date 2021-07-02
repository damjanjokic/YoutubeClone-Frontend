import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Profile } from '../_models/profile';

@Injectable({
    providedIn: 'root'
  })

  export class ProfileService{
    baseUrl = `${environment.apiUrl}profiles/`;

    constructor(private http: HttpClient) {}

    getProfile(username): Observable<Profile> {
        return this.http.get<Profile>(this.baseUrl + username);
      }
  }