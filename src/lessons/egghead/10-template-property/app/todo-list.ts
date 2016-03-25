import {Component} from 'angular2/core'
import {TodoService} from './todo-service'
import {TodoItem} from './todo-item'

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <ul>
        <li *ngFor="#todoItem of todoService.todos">
          <input type="checkbox" [(ngModel)]="todoItem.done"> <span [style]="styleFor(todoItem)">{{ todoItem.title }}</span>
        </li>
      </ul>
    </div>
  `
})
export class TodoList {
  constructor(public todoService: TodoService) {

  }

  styleFor(todoItem: TodoItem) {
    return todoItem.done ? 'text-decoration: line-through; color: grey' : '';
  }
}