import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts : Post[]
  ;
  constructor() { }

  ngOnInit(): void {
  }

}
