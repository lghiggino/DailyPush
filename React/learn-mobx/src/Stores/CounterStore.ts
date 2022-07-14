import { action, autorun, makeObservable, observable } from "mobx"

export class CounterStore {
    count: number = 0

    constructor() {
        makeObservable(this, {
            count: observable,
            handleIncrement: action,
            handleDecrement: action
        })
        autorun(() => console.log(this.count))
    }

    handleIncrement = () => {
        return this.count++
    }

    handleDecrement = () => {
        return this.count--
    }
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