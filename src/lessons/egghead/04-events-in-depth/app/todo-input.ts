import {Component} from 'angular2/core'

@Component({
  selector: 'todo-input',
  template: `<div>
    <input type="text" #myInput />
    <button (mouseover)="onClick($event, myInput)">Mouse over me!</button>
  </div>`
})
export class TodoInput {
  onClick($event, myInput) {
    console.log($event, myInput);
  }
}
