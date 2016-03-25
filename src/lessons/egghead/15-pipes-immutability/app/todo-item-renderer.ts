import {Component, Input} from 'angular2/core'
import {TodoItem} from './todo-item'
import {ViewEncapsulation} from 'angular2/core'

@Component({
  // Emulated (partial encapsulation: in - true, out - false):
  // 1. Import global styles and apply to component
  // 2. Do not export component styles, encapsulate from global

  // Native (full encapsulation: in - false, out - false):
  // 1. Do not import global styles
  // 2. Do not export component styles, encapsulate from global

  // None (no encapsulation: in - true, out - true):
  // 1. Import global styles and apply to component
  // 2. Export component styles to global styles
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'todo-item-renderer',
  template: `
    <style>
      .done-true {
        text-decoration: line-through;
        color: grey;
      }
    </style>
    <input type="checkbox" [(ngModel)]="todoItem.done"> <span [ngClass]="'done-' + todoItem.done">{{ todoItem.title }}</span>
  `
})
export class TodoItemRenderer {
  @Input() todoItem;
}