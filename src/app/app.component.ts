import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  


  constructor() {
    // configuration pour le backend Firebase
    const config = {
      apiKey: "AIzaSyBjr0haTj_L_tSlqOyK3-_81E81Xq66c0U",
      authDomain: "angularclassroomexpost.firebaseapp.com",
      databaseURL: "https://angularclassroomexpost.firebaseio.com",
      projectId: "angularclassroomexpost",
      storageBucket: "gs://angularclassroomexpost.appspot.com",
      messagingSenderId: "363936291629",
      appId: "1:363936291629:web:147056780a13364e7591a4"
    };

    firebase.initializeApp(config);
  }
}
