import {Component} from 'angular2/core'
import {TodoService} from './todo-service'

@Component({
  selector: 'todo-input',
  template: `<div>
    <input type="text" #myInput />
    <button (click)="addTodo(myInput)">Add todo</button>
    <button (click)="showTodos()">Show todos list</button>
  </div>`
})
export class TodoInput {
  constructor(public todoService: TodoService) {
  }

  addTodo(myInput) {
    this.todoService.todos.push(myInput.value);
  }

  showTodos() {
    console.log(this.todoService.todos);
  }
}
