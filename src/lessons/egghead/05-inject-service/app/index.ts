import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {TodoInput} from './todo-input'
import {TodoService} from './todo-service'

@Component({
  selector: 'app',
  directives: [TodoInput],
  template: '<h1>Hello world!</h1> <todo-input></todo-input>'
})
export class App {}

bootstrap(App, [TodoService]);