import {Component} from 'angular2/core'
import {TodoService} from './todo-service'

@Component({
  selector: 'todo-input',
  template: `<div>
    <form (submit)="addTodo()">
      <input type="text" [(ngModel)]="todo" />
    </form>
  </div>`
})
export class TodoInput {
  todo;

  constructor(public todoService: TodoService) {
  }

  addTodo(myInput) {
    this.todoService.todos.push(this.todo);
    this.todo = '';
  }
}
