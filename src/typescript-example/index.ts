import {Employee, Employer, Person} from './model/Person';


/**
 * Various experiments with types in typescript
 */

const people: Array<Person> = [
    new Employee('Franta', 21),
    new Employer('Joseph', 19),
    {
        age: 0, name: ""

    },
    new class implements Person {
        age: number = 53;
        name: string = 'Elizabeth';
    }
];

people.forEach(person => console.log(person));


function analyzeString(input: string | number | null) {
    if (input !== null) {
        if (typeof input == 'string') {
            console.log(input.length);
        } else {
            console.log(input.toFixed(10));

        }
    }
    // console.log(input.length);
}


async function doSmth(): Promise<string> {
    return 'aaaa';
}

async function startComputation() {
    const str = await doSmth();
    return str;
}

startComputation()
    .then((str) => console.log("computed", str));


class Animal {
    private _age = 0;

    get age() {
        return this._age;
    }

    set age(newAge: number) {
        this._age = newAge;
    }

    private move() {

    }
}

const animal = new Animal();

interface Point {
    x: number,
    y: number
}

interface Movable {
    speed: number
}

const obj: Point & Movable = {
    x: 0,
    y: 0,
    speed: 0
};

const obj2 = {
    ...obj, z: 42, foo: function () {
        console.log('FOOOOOO!')
    }
};

const {foo, x, y, z, speed} = obj2;
foo();
