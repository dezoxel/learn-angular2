import {Component} from 'angular2/core'
import {TodoService} from './todo-service'
import {TodoItem} from './todo-item'
import {TodoItemRenderer} from './todo-item-renderer'
import {StartedPipe} from './started-pipe'

@Component({
  selector: 'todo-list',
  pipes: [StartedPipe],
  directives: [TodoItemRenderer],
  template: `
    <div>
      <ul>
        <li *ngFor="#todoItem of todoService.todos | started">
          <todo-item-renderer
            [todoItem]="todoItem"
            (toggle)="todoService.toggleTodo(todo)"
           ></todo-item-renderer>
        </li>
      </ul>
    </div>
  `
})
export class TodoList {
  constructor(public todoService: TodoService) {

  }

}