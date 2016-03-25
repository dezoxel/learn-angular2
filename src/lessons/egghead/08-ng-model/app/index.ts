import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {TodoInput} from './todo-input'
import {TodoService} from './todo-service'
import {TodoList} from './todo-list'

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList],
  template: `
    <h1>Hello world!</h1>

    <todo-input></todo-input>
    <todo-list></todo-list>
   `
})
export class App {}

bootstrap(App, [TodoService]);