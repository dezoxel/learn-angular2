import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'search-box',
  template: `
    Filter items started from:<br>
    <input #searchBox type="text" (input)="onInput(searchBox.value)">
    <br>
  `
})
export class SearchBox {
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }

  onInput(value) {
    this.update.emit(value);
  }
}