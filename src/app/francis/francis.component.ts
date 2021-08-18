import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-francis',
  templateUrl: './francis.component.html',
  styleUrls: ['./francis.component.css']
})
export class FrancisComponent implements OnInit {

  @Input() todo! :Todo;
  constructor() { }

  ngOnInit(): void {
  }

}
