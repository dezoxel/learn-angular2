import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'status-selector',
  template: `
    Choose status to show: <br>
    <select #sel (change)="selectStatus(sel.value)">
      <option *ngFor="#status of statuses">{{ status }}</option>
    </select>
  `
})
export class StatusSelector {
  @Output() select = new EventEmitter();
  statuses = [false, true];

  ngOnInit() {
    this.selectStatus(this.statuses[0]);
  }

  selectStatus(status) {
    this.select.emit(status);
  }
}