import { autorun, makeObservable, observable } from "mobx"

export class CounterStore {
    count: number = 0

    constructor() {
        makeObservable(this, {
            count: observable
        })
        autorun(() => console.log(this.count))
    }

    handleIncrement = () => {
        return this.count++
    }

    handleDecrement = () => {
        return this.count--
    }
}