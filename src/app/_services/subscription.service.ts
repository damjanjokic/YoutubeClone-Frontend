import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class SubscriptionService{
    baseUrl = `${environment.apiUrl}subscriptions/`;

    constructor(private http: HttpClient) {}

    subscribeTo(targetUsername) {
        return this.http.post(this.baseUrl+targetUsername+'/subscribe', {});
      };
    
    unsubscribe(observerUsername) {
        return this.http.delete(this.baseUrl+observerUsername+'/unsubscribe');
      }

  }