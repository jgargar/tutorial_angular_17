import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
    selector: 'app-root',
    standalone: true,
    //template: `<h1>Hola mundo desde {{ city.toUpperCase() }}</h1>
    //<app-user />`,
    //styles:``,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent]
})
export class AppComponent {
  city = 'Sevilla';
}
