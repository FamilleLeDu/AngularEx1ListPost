import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  // Création d'une propriété avec le décorateur @Input pour réception de l'object post
  @Input() postItem: any;


  constructor() { }

  ngOnInit() {
  }

  // Méthode pour augmenter les Its
  onIncreaseLoveIts() {
    this.postItem.loveIts++;
  }

  // Méthode pour diminuer les Its
  onDecreaseLoveIts() {
    if (this.postItem.loveIts > 0) this.postItem.loveIts--;
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
