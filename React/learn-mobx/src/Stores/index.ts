import { create } from 'mobx-persist';
import { CounterStore } from './CounterStore';
import { ObservableTodoStore } from './ObservableTodoStore';
import { PokemonStore } from './PokemonStore';

class RootStore {
    counterStore: CounterStore;
    observableTodoStore: ObservableTodoStore;
    pokemonStore: PokemonStore

    constructor() {
        this.counterStore = new CounterStore()
        this.observableTodoStore = new ObservableTodoStore()
        this.pokemonStore = new PokemonStore()
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

hydrate('pokemonStore', store.pokemonStore)
    .then(() => console.log('pokemonStore has been hydrated'))
    .catch((error) => console.log(error))

export {
    store,
    RootStore,
    CounterStore,
    ObservableTodoStore,
    PokemonStore
}