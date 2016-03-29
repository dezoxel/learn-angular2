import {Component} from 'angular2/core'
import {TodoService} from './todo-service'
import {TodoItem} from './todo-item'

@Component({
  selector: 'todo-input',
  template: `<div>
    <form (submit)="addTodo()">
      Add todo: <br><input type="text" [(ngModel)]="todoItem.title" />
    </form>
  </div>`
})
export class TodoInput {
  todoItem: TodoItem;

  constructor(public todoService: TodoService) {
    this.todoItem = new TodoItem();
  }

  addTodo(myInput) {
    this.todoService.addTodo(this.todoItem);
    this.todoItem = new TodoItem();
  }
}
