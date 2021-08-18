import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Todo';
  todo:Todo[] =[
    {id:1, label:'go to school', work:'use a bus', vehicle:'prado'},
    {id:2, label:'go to work', work:'use vs code',vehicle:'Mercedes' }
  ]

  
}
