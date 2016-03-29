import {Component, Input} from 'angular2/core'
import {TodoService} from './todo-service'
import {TodoItem} from './todo-item'
import {TodoItemRenderer} from './todo-item-renderer'
import {StartedPipe} from './started-pipe'
import {SearchPipe} from './search-pipe'

@Component({
  selector: 'todo-list',
  pipes: [StartedPipe, SearchPipe],
  directives: [TodoItemRenderer],
  template: `
    <div>
      <ul>
        <li *ngFor="#todoItem of todoService.todos | started : status | search : term">
          <todo-item-renderer
            [todoItem]="todoItem"
            (toggle)="todoService.toggleTodo(todoItem)"
           ></todo-item-renderer>
        </li>
      </ul>
    </div>
  `
})
export class TodoList {
  @Input() status: boolean;
  @Input() term: string;

  constructor(public todoService: TodoService) {

  }
}