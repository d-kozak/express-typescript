import {Employee} from "../model/Person";

export function Logged(smth: typeof Employee) {
    let e = new smth('foo', 21);
    console.log('Using decorator with', smth)
}