import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cake Documentary';
  cake = {
    name: 'Chocolate cake',
    type: 'chocolate',
  };

  yell(e){
    alert("YAAAAAAAAAAAAAAAAAAAAAAAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUUUUUUUUUUUUUUEEEEEEEEEIIIIIIIIIIIIIIII!!!!!!!!!!!!!");
  }
}