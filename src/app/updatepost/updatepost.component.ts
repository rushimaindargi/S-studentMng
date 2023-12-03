import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  post:Posts = new Posts();
  constructor(private postsService:PostsService, private router:Router,
    private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.loadData(id);
  }

  loadData(id:number):void{
      this.postsService.retrievePost(id)
      .subscribe(data => {
        console.log(data);
        this.post=data;
      })
  }

  updatePost():void{
    this.postsService.updatePost(this.post)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['']);
    })
  }

}
