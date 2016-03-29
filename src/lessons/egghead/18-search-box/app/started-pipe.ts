import {Pipe} from 'angular2/core'

@Pipe({
  name: 'started'
})
export class StartedPipe {
  transform(value, [done]) {
    done = ('' + done) === 'true';
    return value.filter(item => item.done === done);
  }
}