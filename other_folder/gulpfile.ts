import { Gulpclass, Task } from 'gulpclass/Decorators';
import { a } from './other_gulpfile'

@Gulpclass()
export class Gulpfile {

    @Task('test')
    test(cb: Function) {
        console.log('hi from this file!');
        a();
    }
}