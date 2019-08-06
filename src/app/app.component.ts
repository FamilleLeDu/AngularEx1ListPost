import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ex1 Liste de Post';
  // Objet contenant la liste des posts qui est envoyé au component post-list
  // La date de création est initialisée dans le constructor
  postList = [
    {
      title: 'Mon premier post',
      content: 'Le contenue du premier post',
      loveIts: 1,
      created_at: null
    }
    , {
      title: 'Mon deuxieme post',
      content: 'Le contenue du deuxieme post',
      loveIts: 5,
      created_at: null
    }
    , {
      title: 'Mon troisieme post',
      content: 'Le contenue du troisieme post',
      loveIts: 11,
      created_at: null
    }
  ];


  constructor() {
    // Initialisation de la date de creation du post
    this.postList.forEach(function (value) {
      value.created_at = new Date();
    });
  }
}
