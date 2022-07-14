import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

interface People {
    name: string
}

export class PeopleStore {
    @observable 
    names: People[] = [];

    @observable
    count: number = 0

    constructor() {
        makeObservable(this, {
            names: observable
        })
    }

    addPerson(name: string) {
        this.names.push({
            name: name
        })
    }
}
