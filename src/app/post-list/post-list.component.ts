import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;


  // import du service dans le constructeur 
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Souscrire à l'observable Posts pour avoir tous les changements
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    // Initialisation de la liste local
    this.postsService.emitPosts();
  }

  // Suppression d'un post
  onDeletePost(post: Post){
     this.postsService.removePost(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
