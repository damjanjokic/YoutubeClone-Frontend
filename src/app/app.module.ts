import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MaterialModule } from './material.module';
import { AuthService } from './_services/auth.service';
import { ProfileService } from './_services/profile.service';
import { ProfileDetailsResolver } from './_resolvers/profile-details-resolver';
import { PostListResolver } from './_resolvers/post-list-resolver';
import { PostCardComponent } from './post-card/post-card.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionService } from './_services/subscription.service';
import { PostService } from './_services/post.service';
import { HomeComponent } from './home/home.component';
import { PostListByUsernametResolver } from './_resolvers/post-list-by-username-resolver';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileDetailComponent,
    PostCardComponent,
    SubscriptionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [
  AuthService,
  ProfileService,
  PostService,
  SubscriptionService,
  ProfileDetailsResolver,
  PostListByUsernametResolver
],
  bootstrap: [AppComponent]
})
export class AppModule { }
