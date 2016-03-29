import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {TodoInput} from './todo-input'
import {TodoService} from './todo-service'
import {TodoList} from './todo-list'
import {StatusSelector} from './status-selector'

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList, StatusSelector],
  template: `
    <h1>Hello world!</h1>
    <status-selector (select)="onStatusChanged($event)"></status-selector>
    <todo-input></todo-input>
    <todo-list [status]="status"></todo-list>
   `
})
export class App {
  status: boolean = false;

  onStatusChanged(status: boolean) {
    this.status = status;
  }
}

bootstrap(App, [TodoService]);