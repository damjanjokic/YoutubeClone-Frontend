import { PostParams } from './../_models/postParams';
import { PostService } from './../_services/post.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { Profile } from 'src/app/_models/profile';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/_models/post';
import { PaginatedResult, Pagination } from '../_models/pagination';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit { 
  profile : Profile;
  username : string;
  posts: Post[] ;
  postParams : PostParams = {sortBy : 'title', isAscending : true};
  pagination: Pagination;


  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private postService : PostService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername();

    this.route.data.subscribe((response) => {
      this.profile = response.profile;
      this.posts = response.posts;
    });

  }

  // loadPosts(){
  //   this.postService.getPostsByUsername(this.profile.username).subscribe((response) =>{
  //     this.posts = response;
  //     console.log(this.posts );
  //   });
  // }


}
