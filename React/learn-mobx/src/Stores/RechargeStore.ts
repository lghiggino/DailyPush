import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx"

export class RechargeStore {
    pikachu: any = {}
    anypokemon: any = {}

    constructor() {
        makeObservable(this, {
            pikachu: observable,
            anypokemon: observable,
            handleGetPikachu: action,
            handleGetPokemon: action
        });
    }

    handleGetPikachu = async () => {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            runInAction(() => {
                return this.pikachu = data
            })
        } catch (error) {
            runInAction(() => {
                return this.pikachu = { undefined }
            })
        }
    }

    handleGetPokemon = async (poke: string) => {
        console.log('entrou aqui')
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            runInAction(() => {
                return this.anypokemon = data
            })
        } catch (error) {
            runInAction(() => {
                return this.anypokemon = { undefined }
            })

        }
    }
}