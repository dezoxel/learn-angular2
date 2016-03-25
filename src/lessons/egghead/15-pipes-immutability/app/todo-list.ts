import {Component} from 'angular2/core'
import {TodoService} from './todo-service'
import {TodoItem} from './todo-item'
import {TodoItemRenderer} from './todo-item-renderer'
import {SearchPipe} from './search-pipe'

@Component({
  selector: 'todo-list',
  pipes: [SearchPipe],
  directives: [TodoItemRenderer],
  template: `
    <div>
      <ul>
        <li *ngFor="#todoItem of todoService.todos | search">
          <todo-item-renderer [todoItem]="todoItem"></todo-item-renderer>
        </li>
      </ul>
    </div>
  `
})
export class TodoList {
  constructor(public todoService: TodoService) {

  }

}