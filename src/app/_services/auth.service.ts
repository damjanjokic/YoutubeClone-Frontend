import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })

  export class AuthService{
    baseUrl = `${environment.apiUrl}users/`;
    jwtHelper = new JwtHelperService();
    private user = new BehaviorSubject<User>(null);
    userData = this.user.asObservable();
  
    constructor(private http: HttpClient, private router: Router) {}

    login(model: any) {
        return this.http.post(this.baseUrl + 'login', model).pipe(
          tap((response: any) => {
            if (response) {
              localStorage.setItem('token', response.token);
              localStorage.setItem('username', response.username);
              localStorage.setItem('displayName', response.displayName);
              localStorage.setItem('id', response.id);
              this.router.navigate(['home']);
            }
          })
        );
      }

      register(model: any) {
        return this.http.post(this.baseUrl + 'register', model);
      }
    
      getNameId() {
        let token: any = localStorage.getItem('token');
        token = this.jwtHelper.decodeToken(token);
        return token.nameid;
      }

      getUsername() {
        return  localStorage.getItem('username');
      }
    
      loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
      }
    
      logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['user/login']);
      }
  }

