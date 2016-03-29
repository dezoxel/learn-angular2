import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {TodoInput} from './todo-input'
import {TodoService} from './todo-service'
import {TodoList} from './todo-list'
import {StatusSelector} from './status-selector'
import {SearchBox} from './search-box'

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList, StatusSelector, SearchBox],
  template: `
    <h1>Hello world!</h1>
    <search-box (update)="onTermChanged($event)"></search-box>
    <status-selector (select)="onStatusChanged($event)"></status-selector>
    <todo-input></todo-input>
    <todo-list [status]="status" [term]="term"></todo-list>
   `
})
export class App {
  status: boolean;
  term: string;

  onStatusChanged(status: boolean) {
    this.status = status;
  }

  onTermChanged(term: string) {
    this.term = term;
  }
}

bootstrap(App, [TodoService]);