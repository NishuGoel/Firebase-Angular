import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<br><br>

  <div align = "center">
  <button class = "btn btn-primary" routerLink="/login" routerLinkActive="active" style = "margin:30px">Login</button>

  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Firebaseproj';
}
