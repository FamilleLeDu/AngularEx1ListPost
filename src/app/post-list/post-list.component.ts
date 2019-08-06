import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // Création d'une propriété avec le décorateur @Input pour réception de l'object liste des posts
  @Input() postList: any;

  // Varaible date pour affichage de la date en entête de la page (différent de la date des posts)
  lastUpdate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
