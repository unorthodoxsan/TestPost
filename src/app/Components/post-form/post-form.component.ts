import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(id) {
    if (!id) {
      alert('Please add post');
    } else {
      let obj = {id:1};
      this.postService.savePost({ id } as Post).subscribe(post => {
        console.log("Post="+post);
      });
    }
  }
}
