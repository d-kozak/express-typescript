import {Logged} from '../decorators/decorator';

export interface Person {
    name: string;
    age: number;
}

@Logged
export class Employee implements Person {

    constructor(public name: string, public age: number) {

    }
}

export class Employer implements Person {

    constructor(public name: string, public age: number) {

    }
}
