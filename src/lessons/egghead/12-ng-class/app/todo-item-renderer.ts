import {Component, Input} from 'angular2/core'
import {TodoItem} from './todo-item'

@Component({
  selector: 'todo-item-renderer',
  template: `
    <style>
      .done-true {
        text-decoration: line-through;
        color: grey;
      }
    </style>
    <input type="checkbox" [(ngModel)]="todoItem.done"> <span [ngClass]="'done-' + todoItem.done">{{ todoItem.title }}</span>
  `
})
export class TodoItemRenderer {
  @Input() todoItem;
}