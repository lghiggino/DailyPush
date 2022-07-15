import { create } from 'mobx-persist';
import { CounterStore } from './CounterStore';
import { ObservableTodoStore } from './ObservableTodoStore';

class RootStore {
    counterStore: CounterStore;
    observableTodoStore: ObservableTodoStore;

    constructor() {
        this.counterStore = new CounterStore()
        this.observableTodoStore = new ObservableTodoStore()
    }
}

const store = new RootStore();
const hydrate = create({ storage: localStorage })

hydrate('counterStore', store.counterStore)
    .then(() => console.log('counterStore has been hydrated'))
    .catch((error) => console.log(error))

hydrate('observableTodoStore', store.observableTodoStore)
    .then(() => console.log('observableTodoStore has been hydrated'))
    .catch((error) => console.log(error))

export {
    store,
    RootStore,
    CounterStore,
    ObservableTodoStore
}