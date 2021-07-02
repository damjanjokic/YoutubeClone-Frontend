import { PostListResolver } from './_resolvers/post-list-resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './_services/interceptior.service';
import { ProfileDetailsResolver } from './_resolvers/profile-details-resolver';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { HomeComponent } from './home/home.component';
import { PostListByUsernametResolver } from './_resolvers/post-list-by-username-resolver';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'registration', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'profile/:username',
    component: ProfileDetailComponent,
    resolve: { profile: ProfileDetailsResolver, posts: PostListByUsernametResolver }
  },
  {
    path: 'home',
    component : HomeComponent,
    resolve : { posts : PostListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ]
})
export class AppRoutingModule { }
