import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  
  // Observable sur la liste des poste
  postsSubject = new Subject<Post[]>();

  constructor() { 
    // Lecture des posts existant dans la base Firbase
    this.getPosts();
  }
 
  // Methode pour mettre à jour la liste des posts pour les observateurs
  emitPosts() {
    this.postsSubject.next(this.posts);
  }
 
  // sauvegarde ds posts dans la base firebase
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
    this.emitPosts();
  }

// Lecture des posts dans la base firebase
 getPosts() {
  firebase.database().ref('/posts')
  .on('value',(data) => {   // la méthode on() permet de lire et d'être prévenu à chaque fois qu'il y a une modification au niveau du noeud 
  this.posts = data.val() ? data.val() : [];
  this.emitPosts();
  }
  );
 }

 // insertion d'un nouveau post et sauvegarde
createNewPost( newPost: Post) {
  this.posts.push(newPost);
  this.savePosts();
}

// suppression d'un poste et sauvegarde
removePost(post: Post) {
  const postIndexToRemove = this.posts.findIndex(
    (postEl) => {
      if(postEl === post) {
        return true;
      }
    }
  );
  this.posts.splice(postIndexToRemove, 1);
  this.savePosts();
}

// modification des LoveIts et sauvegarde
increaseLoveIts(indexPost: number) {
    this.posts[indexPost].loveIts++;
    this.savePosts();
  }

decreaseLoveIts(indexPost: number) {
  this.posts[indexPost].loveIts--;
  this.savePosts();
}

}
