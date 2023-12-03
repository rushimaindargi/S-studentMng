import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent  {
 post: Posts= new Posts();

  constructor(private postService:PostsService, private router:Router){}

  uploadPost(){
    this.postService.createPost(this.post)
    .subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['']);
      },
      error: err => console.log(err)
  });
  }
}
