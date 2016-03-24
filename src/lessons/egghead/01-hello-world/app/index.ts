import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'

@Component({
  selector: 'app',
  template: '<h1>Hello world!</h1>'
})
export class App {}

bootstrap(App);