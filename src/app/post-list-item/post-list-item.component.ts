import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  // Création d'une propriété avec le décorateur @Input pour réception de l'object post
  @Input() postItem: Post;
  @Input() indexPosts: number;


  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit() {
  }

  // Méthode pour augmenter les Its
  onIncreaseLoveIts() {
    this.postsService.increaseLoveIts(this.indexPosts);
  }

  // Méthode pour diminuer les Its
  onDecreaseLoveIts() {
    this.postsService.decreaseLoveIts(this.indexPosts);
  }

  // Methode pour la suppression du post
  onDeletePost() {
    this.postsService.removePost(this.postItem);
  }

  // Méthode pour déterminer si le post est populaire #its >= 10
  ifItemSucess() {
    if (this.postItem.loveIts >= 10)
      return true;
    else return false;
  }

  // Méthode pour déterminer si le post n'est pas populaire #its <= 3
  ifItemDanger() {
    if (this.postItem.loveIts <= 3)
      return true;
    else return false;
  }

  // Métode qui détermine la couleur d'affichage du text suivant la popularité du post
  getColor() {
    if (this.ifItemDanger())
      return 'red';
    else
      if (this.ifItemSucess())
        return 'green';
      else
        return 'black';
  }
}
