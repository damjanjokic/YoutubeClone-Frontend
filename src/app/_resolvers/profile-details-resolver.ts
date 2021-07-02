import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Profile } from '../_models/profile';
import { ProfileService } from '../_services/profile.service';

@Injectable()
export class ProfileDetailsResolver implements Resolve<Profile> {
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Profile> {
    return this.profileService.getProfile(route.params.username).pipe(
      catchError(() => {
        this.toastr.error('Problem retrieving data!');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
