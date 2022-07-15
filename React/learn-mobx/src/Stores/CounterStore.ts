import { action, makeObservable, observable } from "mobx"

export class CounterStore {
    count: number = 0

    constructor() {
        makeObservable(this, {
            count: observable,
            handleIncrement: action,
            handleDecrement: action
        });
    }

    handleIncrement = () => {
        return this.count++
    }

    handleDecrement = () => {
        return this.count--
    }

    // rootStore: RootStore;

    // constructor(rootStore: RootStore) {
    //     this.rootStore = rootStore;
    // }

    // @observable
    // count: number = 0

    // @action
    // handleIncrement = () => {
    //     console.log("chamou aqui", this.count)
    //     return this.count++
    // }

    // @action
    // handleDecrement = () => {
    //     return this.count--
    // }
}