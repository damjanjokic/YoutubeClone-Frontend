import { Post } from './../_models/post';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../_services/post.service';
import { PostParams } from '../_models/PostParams';

@Injectable()
export class PostListByUsernametResolver implements Resolve<Post[]> {

  constructor(
    private postService: PostService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
    return this.postService.getPostsByUsername(route.params.username).pipe(
      catchError(() => {
        this.toastr.error('Problem retrieving data!');
        this.router.navigate(['/user/login']);
        return of(null);
      })
    );
  }
}
