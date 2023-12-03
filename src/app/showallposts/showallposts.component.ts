import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../models/posts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-showallposts',
  templateUrl: './showallposts.component.html',
  styleUrls: ['./showallposts.component.css']
})
export class ShowallpostsComponent implements OnInit {
  posts: Posts[] =[];
  constructor(private postsService: PostsService, private router:Router) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void{
    this.postsService.listAllPosts()
    .subscribe(data => {
      console.log(data);
      this.posts=data;
    }
    )
  }

  gotoCreate(): void{
    this.router.navigate(['/posts/create'])
  }

  deletePost(id : number): void{
    if(id >0){
    this.postsService.deletePost(id)
    .subscribe(data => {
      console.log(data);
      alert("deleted id")
      this.router.navigate(['']);
    })
  }else{
    alert("Invalid id");
}

}
}
