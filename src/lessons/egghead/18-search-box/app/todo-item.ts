export class TodoItem {
  constructor(
    public title: string = '',
    public done: boolean = false
   ) {}

  toggle() {
    this.done = !this.done;
  }
}