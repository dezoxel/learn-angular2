import {Component, Input} from 'angular2/core'
import {TodoItem} from './todo-item'

@Component({
  selector: 'todo-item-renderer',
  template: `
    <input type="checkbox" [(ngModel)]="todoItem.done"> <span [style]="styleFor(todoItem)">{{ todoItem.title }}</span>
  `
})
export class TodoItemRenderer {
  @Input() todoItem;

  styleFor(todoItem: TodoItem) {
    return todoItem.done ? 'text-decoration: line-through; color: grey' : '';
  }
}