import axios from "axios";
import { action, makeObservable, observable } from "mobx"

export class PokemonStore {
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
            const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            return this.pikachu = data
        } catch (error) {
            return this.pikachu = {undefined}
        }
    }

    handleGetPokemon = async (poke: string) => {
        console.log('entrou aqui')
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            console.log(data, typeof data)
            return this.anypokemon = data
        } catch (error) {
            return this.anypokemon = {undefined}
        }
    }
}