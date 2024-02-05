import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>
      comments works!
    </p>
    <img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <p>
      El gato doméstico1​2​ (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino,3​ michino,4​ michi,5​ micho,6​ mizo,7​ miz,8​ morroño9​ o morrongo,10​ y algunos nombres más, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada, por la convivencia con el ser humano, del gato montés.
    </p>
  `,
  styles: `
    img{
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
