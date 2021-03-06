import {Injectable} from 'angular2/core'
import {TodoItem} from './todo-item'

@Injectable()
export class TodoService {
  todos = [
    new TodoItem('eat', true),
    new TodoItem('sleep'),
    new TodoItem('code')
  ];

  // here we don't `.push()` to `todos`, but create completely new `todos` array
  // thus we achieve data immutability
  addTodo(todoItem: TodoItem) {
    this.todos = [...this.todos, todoItem];
  }

  toggleTodo(todo) {
    const i = this.todos.indexOf(todo);

    todo.toggle();

    this.todos = [
      ...this.todos.slice(0, i),
      todo,
      ...this.todos.slice(i + 1)
    ];
  }
}