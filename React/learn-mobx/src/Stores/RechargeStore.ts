import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx"

export class RechargeStore {
    anypokemon: any = {}
    ddd: string | undefined = undefined
    phone: string | undefined = undefined
    provider: string | undefined = undefined
    partnerResponse: any[] | undefined = undefined

    constructor() {
        makeObservable(this, {
            anypokemon: observable,
            ddd: observable,
            phone: observable,
            provider: observable,
            partnerResponse: observable,
            handleGetPokemon: action,
            handleGetSplitPhoneNumber: action
        });
    }

    handleGetSplitPhoneNumber = (phoneNumber: string) => {
        if (phoneNumber.length !== 11) {
            alert('invalid phone number')
        }
        else {
            this.ddd = phoneNumber.slice(0, 2)
            this.phone = phoneNumber.slice(2)
            alert(`${this.ddd} + ${this.phone}`)
        }
    }

    handleApiCallLogin = async () => {
        const username = process.env.RV_USERNAME
        const password = process.env.RV_PASSWORD

        console.log(username, password)
        try {
            const { data } = await axios.post('https://auth.sbx.rvhub.com.br/oauth2/token?grant_type=client_credentials', {}, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic N2Y2bWFsdjBnY2NtNXJvdm1wYWp2YXBoaTY6cTJqMXZjY245MXFxcHY0MDNpamMwMmFtYW8ybmZwaXY1ZHBjZzFyaDFlbDhtYzIzYnFu'
                }
            })

            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    handleGetProviderName = (providerName: string) => {
        //precisa checar a validade do providerName se ele vem de um front controlado?
        this.provider = providerName
        if ((this.ddd !== undefined) && (this.provider !== undefined)) {
            this.handleGetProviderOptionsList(this.ddd, this.provider)
        }
    }

    handleGetProviderOptionsList = async (ddd: string, provider: string) => {
        try {
            //posta pra senha
            //get dos planos e seta this.partnerResponse
            // const {data} = await axios.get()
        } catch (error) {
            alert(error)
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