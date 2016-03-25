import {Injectable} from 'angular2/core'
import {TodoItem} from './todo-item'

@Injectable()
export class TodoService {
  todos = [
    new TodoItem('eat'),
    new TodoItem('sleep'),
    new TodoItem('code')
  ];
}